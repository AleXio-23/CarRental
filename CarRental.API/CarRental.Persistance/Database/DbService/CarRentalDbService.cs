using CarRental.Application.Interfaces.Persistance;
using CarRental.Application.Interfaces.Persistance.Processing;
using CarRental.Persistance.Database.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.Database.DbService
{
    public class CarRentalDbService: ICarRentalDBService
    {
        private readonly CarRentalAppDbContext _dbContext;

        public CarRentalDbService(CarRentalAppDbContext dbContext
               //,IUserRepository<UserClass, int> userclass
            )
        {
            this._dbContext = dbContext;
        }

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
