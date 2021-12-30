using CarRental.Application.Interfaces.Persistance;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.User.User.Commands.AddNewRoleCommand
{
    class AddNewRoleCommand : IAddNewRoleCommand
    {
        private readonly UserManager<CarRental.Domain.Auth.User> _userManager;
        private readonly RoleManager<CarRental.Domain.Auth.Role> _roleManager;
        private ICarRentalDBService _dbService;

        public AddNewRoleCommand(ICarRentalDBService dbService,
             UserManager<CarRental.Domain.Auth.User> userManager,
             RoleManager<CarRental.Domain.Auth.Role> roleManager)
        {
            _dbService = dbService;
            _userManager = userManager;
            _roleManager = roleManager;
        }
        public async Task<IdentityResult> Execute(string roleName)
        {

            var IdentityRole = new CarRental.Domain.Auth.Role
            {
                Name = roleName
            };

            var result = await _roleManager.CreateAsync(IdentityRole);
   

            return result;
        }
    }
}
