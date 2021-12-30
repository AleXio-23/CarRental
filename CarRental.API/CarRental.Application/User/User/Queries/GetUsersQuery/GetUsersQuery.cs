using CarRental.Application.Interfaces.Persistance;
using CarRental.Application.User.User.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.User.User.Queries.GetUsersQuery
{
    class GetUsersQuery : IGetUsersQuery
    {
        private readonly UserManager<CarRental.Domain.Auth.User> _userManager;
        private ICarRentalDBService _dbService;

        public GetUsersQuery(ICarRentalDBService dbService,
             UserManager<CarRental.Domain.Auth.User> userManager)
        {
            _dbService = dbService;
            _userManager = userManager;
        }
        public List<UserDTO> Execute()
        {
            var getUsers = _userManager.Users.ToList();
            var usersListDto = new List<UserDTO>();

            foreach (var user in getUsers)
            {
                usersListDto.Add(new UserDTO()
                {
                    Id = user.Id,
                    Email = user.Email,
                    UserName = user.UserName,
                    LockoutEnabled = user.LockoutEnabled,
                    EmailConfirmed = user.EmailConfirmed,
                    LockoutEnd = user.LockoutEnd                    
                });
            }

            return usersListDto;
        }
    }
}
