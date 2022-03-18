using CarRental.Infrastructure.Auth;
using CarRental.Infrastructure.Auth.Models;
using CarRental.Persistance.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace CarRental.API.Auth
{
    [Route("[controller]")]
    [ApiController]
  
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IServiceScopeFactory serviceScopeFactory;

        public AuthController(IConfiguration configuration, IServiceScopeFactory serviceScopeFactory)
        {
            this.configuration = configuration;
            this.serviceScopeFactory = serviceScopeFactory;
        }




        [HttpPost("Register")]
        public async Task<RegistrationResponse> Register([FromBody] RegisterModel registerModel)
        {

            var smtpCredintials = new SmtpCredintials()
            {
                MailFrom = "alekogabelashvili777@gmail.com",
                Host = "smtp-relay.sendinblue.com",
                Port = 587,
                NetworkCredintialUsername = "alekogabelashvili777@gmail.com",
                Password = "pnAIvYMBa8xP9RqD"

            };

            var confirmCredintials = new ConfirmationCredintials()
            {
                Host = "localhost",
                Port = "7260"
            };

            using var scope = serviceScopeFactory.CreateScope();
            var authHandler = scope.ServiceProvider.GetService<IAuthorization>();
            var result = await authHandler.Register(registerModel, smtpCredintials, confirmCredintials);

            return result;
        }

        [HttpGet("EmailConfirmation")]
        public async Task<IActionResult> EmailConfirmation(int userId, string token)
        {
            using var scope = serviceScopeFactory.CreateScope();
            var confirmHandler = scope.ServiceProvider.GetService<IAuthorization>();
            var result = await confirmHandler.EmailConfirmation(userId, token);
            return Ok(result);
        }


        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] LoginModel loginModel)
        {

            var secretKey = Encoding.ASCII.GetBytes(configuration.GetValue<string>("SecretKey"));

            using var scope = serviceScopeFactory.CreateScope();
            var signInHandler = scope.ServiceProvider.GetService<IAuthorization>();

            var result = await signInHandler.SignIn(loginModel, secretKey);

            return Ok(result);
        }

        [Authorize]
        [HttpPost("SignOut")]
        public async Task<IActionResult> SignOut()
        {
            using var scope = serviceScopeFactory.CreateScope();
            var signInHandler = scope.ServiceProvider.GetService<IAuthorization>();
            await signInHandler.SignOut();
            return Ok();
        }

        [Authorize]
        [Route("TokenValidate")]
        [HttpGet]
        public ActionResult<ServiceResult<bool>> TokenValidate()
        {

            return Ok(new ServiceResult<bool>() { Success = true});
        }
    }
}
