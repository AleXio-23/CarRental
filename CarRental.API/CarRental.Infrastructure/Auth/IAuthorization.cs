using CarRental.Infrastructure.Auth.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Infrastructure.Auth
{
    public interface IAuthorization
    {

        Task<RegistrationResponse> Register(RegisterModel registerModel,SmtpCredintials credintials, ConfirmationCredintials hostCredintials);
        Task<IdentityResult> EmailConfirmation(int userId, string token);
        Task<TokenModel> SignIn(LoginModel loginModel, byte[] clientSecret);
        Task SignOut();
    }
}
