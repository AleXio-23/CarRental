using CarRental.Application.Interfaces.Persistance;
using CarRental.Application.Interfaces.Persistance.Processing;
using CarRental.Domain.Dictionary;
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
            , IDictionaryRepository<City, int> cities

            )
        {
            this._dbContext = dbContext;
            UserProfile = userProfile;
            Cities = cities;
        }

        public IUserRepository<UserProfile, int> UserProfile { get; }

        public IDictionaryRepository<City, int> Cities { get; }

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
