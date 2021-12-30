using CarRental.Domain.Car;
using CarRental.Domain.User;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Domain.Auth
{
    public class User:IdentityUser<int>
    {
        public User()
        {
            CarRentalHistoryCustomers = new HashSet<CarRentalHistory>();
            CarRentalHistoryLandLords = new HashSet<CarRentalHistory>();
            CurrentCarRentalStatusCustomers = new HashSet<CurrentCarRentalStatus>();
            CurrentCarRentalStatusLandLords = new HashSet<CurrentCarRentalStatus>();
            UserProfiles = new HashSet<UserProfile>();
        }

        public virtual ICollection<CarRentalHistory> CarRentalHistoryCustomers { get; set; }
        public virtual ICollection<CarRentalHistory> CarRentalHistoryLandLords { get; set; }
        public virtual ICollection<CurrentCarRentalStatus> CurrentCarRentalStatusCustomers { get; set; }
        public virtual ICollection<CurrentCarRentalStatus> CurrentCarRentalStatusLandLords { get; set; }
        public virtual ICollection<UserProfile> UserProfiles { get; set; }
    }
}
