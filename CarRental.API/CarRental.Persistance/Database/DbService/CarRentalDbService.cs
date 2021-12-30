using CarRental.Application.Interfaces.Persistance;
using CarRental.Application.Interfaces.Persistance.Processing;
using CarRental.Domain.User;
using CarRental.Persistance.Database.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.Database.DbService
{
    public class CarRentalDbService : ICarRentalDBService
    {
        private readonly CarRentalAppDbContext _dbContext;

        public CarRentalDbService(CarRentalAppDbContext dbContext
            , IUserRepository<UserProfile, int> userProfile

            )
        {
            this._dbContext = dbContext;
            UserProfile = userProfile;
        }

        public IUserRepository<UserProfile, int> UserProfile { get; }


        public void Save()
        {
            _dbContext.SaveChanges();
        }

        public async Task SaveAsync()
        {
            _dbContext.SaveChangesAsync();
        }
    }
}
