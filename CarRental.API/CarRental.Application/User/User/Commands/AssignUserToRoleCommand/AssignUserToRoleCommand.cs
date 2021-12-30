using CarRental.Application.Interfaces.Persistance;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.User.User.Commands.AssignUserToRoleCommand
{
    class AssignUserToRoleCommand : IAssignUserToRoleCommand
    {
        private readonly UserManager<CarRental.Domain.Auth.User> _userManager;
        private readonly RoleManager<CarRental.Domain.Auth.Role> _roleManager;
        private ICarRentalDBService _dbService;

        public AssignUserToRoleCommand(ICarRentalDBService dbService,
             UserManager<CarRental.Domain.Auth.User> userManager,
             RoleManager<CarRental.Domain.Auth.Role> roleManager)
        {
            _dbService = dbService;
            _userManager = userManager;
            _roleManager = roleManager;
        }
        public  async Task Execute(int userId, int roleId)
        {
            var user = await _userManager.FindByIdAsync(userId.ToString());
            var role = await _roleManager.FindByIdAsync(roleId.ToString());

            var result = _userManager.AddToRoleAsync(user, role.Name);
        }
    }
}
