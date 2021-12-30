using CarRental.Application.User.UserProfile.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.User.UserProfile.Queries.GetUserProfileQuery
{
    public interface IGetUserProfileQuery
    {
        UserProfileDTO Execute(int id);
    }
}
