using CarRental.API.User.Models;
using CarRental.Application.User.UserProfile.Models;
using CarRental.Application.User.UserProfile.Queries.GetUserProfileQuery;
using CarRental.Domain.User;
using CarRental.Persistance.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRental.API.User
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IServiceScopeFactory serviceScopeFactory;

        public UserController(IConfiguration configuration, IServiceScopeFactory serviceScopeFactory)
        {
            this.configuration = configuration;
            this.serviceScopeFactory = serviceScopeFactory;
        }

        [HttpPost("GetUserProfile")]
        public  ActionResult<ServiceResult<UserProfileDTO>> GetUserProfile([FromBody]RequestUserProfile requestModel)
        {
            using var scope = serviceScopeFactory.CreateScope();
            var userProfileHandler = scope.ServiceProvider.GetService<IGetUserProfileQuery>();
            var result = userProfileHandler.Execute(requestModel.UserId);
            
            if(result == null)
            {
                return new ServiceResult<UserProfileDTO> { ErrorOccured = true, ErrorMessage = "User profile not found!", Data = result };
            }

            return new ServiceResult<UserProfileDTO> { Success = true, Data = result };
        }
    }
}
