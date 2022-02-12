using CarRental.Application.Interfaces.Persistance.Processing;
using CarRental.Domain.Dictionary;
using CarRental.Domain.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Interfaces.Persistance
{
    public interface ICarRentalDBService : IDbService
    {
        IUserRepository<UserProfile, int> UserProfile { get; }
        IDictionaryRepository<City, int> Cities {get;}
        IDictionaryRepository<VwCity, int> VwCities {get;}
        IDictionaryRepository<Manufacturer, int> Manufacturers {get;}
      
    }
}
