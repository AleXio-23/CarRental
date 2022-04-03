using CarRental.Domain.Auth;
using CarRental.Infrastructure.Auth.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace CarRental.Infrastructure.Auth
{
    public class Authorization : IAuthorization
    {
        private readonly IConfiguration configuration;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly RoleManager<Role> roleManager;
         

        public Authorization(
            IConfiguration configuration,
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            RoleManager<Role> roleManager)
        {
            this.configuration = configuration;
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.roleManager = roleManager;
        }

        public async Task<RegistrationResponse> Register(RegisterModel registerModel, SmtpCredintials credintials, ConfirmationCredintials hostCredintials)
        {
            try
            {

                var tryFindByUserName = await userManager.FindByNameAsync(registerModel.UserName);
                if(tryFindByUserName != null)
                {
                    return new RegistrationResponse() { ErrorOccured = true, ErrorMessage = "This username is registered." };
                }

                var tryFindByMail = await userManager.FindByEmailAsync(registerModel.Email);
                if (tryFindByMail != null)
                {
                    return new RegistrationResponse() { ErrorOccured = true, ErrorMessage = "This mail is registered." };
                }

                var newUser = new User
                {
                    Email = registerModel.Email,
                    UserName = registerModel.UserName.Length > 0 ? registerModel.UserName : registerModel.Email

                };  

             

                var createUserResult = await userManager.CreateAsync(newUser, registerModel.Password);

                if (createUserResult.Succeeded)
                {

                    var checkRole = await roleManager.RoleExistsAsync("Customer");
                    if(checkRole)
                    {
                        await userManager.AddToRoleAsync(newUser, "Customer");
                    }
                     
                    var generateEmailConfirmationToken = await userManager.GenerateEmailConfirmationTokenAsync(newUser);
                    var encodedToken = HttpUtility.UrlEncode(generateEmailConfirmationToken);
                    var confirmationLink = $"https://{hostCredintials.Host}:{hostCredintials.Port}/Auth/EmailConfirmation?userId={newUser.Id}&token={encodedToken}";


                    var message = new MailMessage(credintials.MailFrom, newUser.Email, "Email confirmation", $"Please, confirm your email: {confirmationLink}");
                    using var emailClient = new SmtpClient(credintials.Host, credintials.Port);
                    emailClient.Credentials = new NetworkCredential(credintials.NetworkCredintialUsername, credintials.Password);
                    await emailClient.SendMailAsync(message);

                    return new RegistrationResponse()
                    {
                        Succees = true,
                        Mail = newUser.Email
                    };
                    
                }
                else
                {
                    throw new Exception("Register new user Error. User not registered");
                }

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public async Task<IdentityResult> EmailConfirmation(int userId, string token)
        {
            var decodedToken = HttpUtility.UrlDecode(token).Replace(' ', '+');
            var user = await userManager.FindByIdAsync(userId.ToString());
            if (user != null)
            {

                var result = await this.userManager.ConfirmEmailAsync(user, decodedToken);
                return result;
            }

            throw new Exception("User not found");
        }


        public async Task<TokenModel> SignIn(LoginModel loginModel, byte[] clientSecret)
        {
            var result = await signInManager.PasswordSignInAsync(loginModel.UsernameOrEmail, loginModel.Password, loginModel.RememberMe, false);
            if (!result.Succeeded)
            {
                var user = await userManager.FindByEmailAsync(loginModel.UsernameOrEmail);
                result = await signInManager.PasswordSignInAsync(user, loginModel.Password, loginModel.RememberMe, false);
            }


            if (result.Succeeded)
            {
                try
                {
                    var user = await userManager.FindByNameAsync(loginModel.UsernameOrEmail);
                    if (user == null)
                    {
                        user = await userManager.FindByEmailAsync(loginModel.UsernameOrEmail);
                    }

                    var userRoles = await userManager.GetRolesAsync(user);

                    var userclaims = await userManager.GetClaimsAsync(user);
                    userclaims.Add(new Claim("Id", user.Id.ToString()));

                    foreach (var role in userRoles)
                    {
                        userclaims.Add(new Claim("Roles", role));
                    }

                    if(user.Email != null)
                    {
                        userclaims.Add(new Claim("Email", user.Email));

                    }
                    if(user.UserName != null)
                    { 
                        userclaims.Add(new Claim("Username", user.UserName)); 
                    }


                    var expirationTokenTIme = DateTime.Now.AddMinutes(5);

                    return new TokenModel
                    {
                        Token = CreateToken(userclaims, expirationTokenTIme, clientSecret),
                        ExpiresAt = expirationTokenTIme
                    };
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }
            else
            {
                throw new Exception("SingIn Error");
            }
        }

        public async Task SignOut()
        {
            await signInManager.SignOutAsync();
        }


        private static string CreateToken(IList<Claim> claims, DateTime expiresAt, byte[] clientSecret)
        {

            var jwt = new JwtSecurityToken(
                
                claims: claims,
                notBefore: DateTime.Now,
                expires: expiresAt,
                signingCredentials: new SigningCredentials(
                    new SymmetricSecurityKey(clientSecret),
                    SecurityAlgorithms.HmacSha256Signature)
                );

            return new JwtSecurityTokenHandler().WriteToken(jwt);

        }


    }
}
