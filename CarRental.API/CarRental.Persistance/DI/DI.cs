using CarRental.Application.Interfaces.Persistance;
using CarRental.Application.Interfaces.Persistance.Processing;
using CarRental.Domain.Dictionary;
using CarRental.Domain.User;
using CarRental.Persistance.Database.DbService;
using CarRental.Persistance.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.DI
{
    public static class DI
    {

        public static IServiceCollection RegisterPersistanceServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<ICarRentalDBService, CarRentalDbService>();
            serviceCollection.AddScoped<IUserRepository<UserProfile, int>, UserRepository<UserProfile, int>>();
            serviceCollection.AddScoped<IDictionaryRepository<City, int>, DictionaryRepository<City, int>>();
            serviceCollection.AddScoped<IDictionaryRepository<VwCity, int>, DictionaryRepository<VwCity, int>>();
            serviceCollection.AddScoped<IDictionaryRepository<Manufacturer, int>, DictionaryRepository<Manufacturer, int>>();
            serviceCollection.AddScoped<IDictionaryRepository<CarModel, int>, DictionaryRepository<CarModel, int>>();
            serviceCollection.AddScoped<IDictionaryRepository<CarCategory, int>, DictionaryRepository<CarCategory, int>>();
            serviceCollection.AddScoped<IDictionaryRepository<Transmision, int>, DictionaryRepository<Transmision, int>>();
            serviceCollection.AddScoped<IDictionaryRepository<FuelType, int>, DictionaryRepository<FuelType, int>>();
            serviceCollection.AddScoped<IDictionaryRepository<WheelType, int>, DictionaryRepository<WheelType, int>>();
             
            return serviceCollection;
        }
    }
}
