using CarRental.Application.Interfaces.Persistance;
using CarRental.Application.User.UserProfile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.User.UserProfile.Queries.GetUserProfileQuery
{
    class GetUserProfileQuery : IGetUserProfileQuery
    {
        private ICarRentalDBService _dbService;

        public GetUserProfileQuery(ICarRentalDBService dbService)
        {
            _dbService = dbService;
        }
        public UserProfileDTO Execute(int id)
        {

            var getUserProfile = _dbService.UserProfile.GetById(id);
            if (getUserProfile != null)
            {
                var userProfDto = new UserProfileDTO()
                {
                    Id = getUserProfile.Id,
                    UserId = getUserProfile.UserId,
                    Firstname = getUserProfile.Firstname,
                    Lastname = getUserProfile.Lastname,
                    BirthDate = getUserProfile.BirthDate,
                    PersonalNumber = getUserProfile.PersonalNumber,
                    Phone1 = getUserProfile.Phone1,
                    Phone2 = getUserProfile.Phone2,
                    ProfileImage = getUserProfile.ProfileImage

                };

                return userProfDto;
            }



            return null;



        }
    }
}
