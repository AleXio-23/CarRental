using CarRental.API.Admin.Models;
using CarRental.Application.User.User.Commands.AddNewRoleCommand;
using CarRental.Application.User.User.Commands.AssignUserToRoleCommand;
using CarRental.Application.User.User.Models;
using CarRental.Application.User.User.Queries.GetUsersQuery;
using CarRental.Persistance.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace CarRental.API.Admin
{
    [Route("[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
  //  [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IServiceScopeFactory serviceScopeFactory;

        public AdminController(IConfiguration configuration, IServiceScopeFactory serviceScopeFactory)
        {
            this.configuration = configuration;
            this.serviceScopeFactory = serviceScopeFactory;
        }



        [HttpPost("GetUsers")]
        public ActionResult<ServiceResult<List<UserDTO>>> GetUsers([FromBody] GetUsersModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var userListhandler = scope.ServiceProvider.GetService<IGetUsersQuery>();
            var result = userListhandler.Execute();

            return new ServiceResult<List<UserDTO>> { Success = true, Data = result };

        }

        [HttpPost("CreateNewRole")]
        public ActionResult<ServiceResult<string>> CreateNewRole([FromBody] CreateNewRoleModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var roleHandler = scope.ServiceProvider.GetService<IAddNewRoleCommand>();
            var result = roleHandler.Execute(model.RoleName);
            

            return new ServiceResult<string> { Success = true, Data = model.RoleName };
        }

        [HttpPost("AssignUserToRole")]
        public ActionResult<ServiceResult<AssignUserToRole>> AssignUserToRole([FromBody] AssignUserToRole model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var roleHandler = scope.ServiceProvider.GetService<IAssignUserToRoleCommand>();
            var result = roleHandler.Execute(model.UserId, model.RoleId);
            

            return new ServiceResult<AssignUserToRole> { Success = true, Data = model };
        }
    }
}
