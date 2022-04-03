﻿using CarRental.Application.Interfaces.Persistance;
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
            , IDictionaryRepository<VwCity, int> vwCities
            , IDictionaryRepository<Manufacturer, int> manufacturers
            , IDictionaryRepository<CarModel, int> carModels
            , IDictionaryRepository<CarCategory, int> carCategories
            , IDictionaryRepository<Transmision, int> transmissions
            , IDictionaryRepository<FuelType, int> fuelTypes
            , IDictionaryRepository<WheelType, int> wheelTypes

            )
        {
            this._dbContext = dbContext;
            UserProfile = userProfile;
            Cities = cities;
            VwCities = vwCities;
            Manufacturers = manufacturers;
            CarModels = carModels;
            CarCategories = carCategories;
            Transmissions = transmissions;
            FuelTypes = fuelTypes;
            WheelTypes = wheelTypes;
        }

        public IUserRepository<UserProfile, int> UserProfile { get; }

        public IDictionaryRepository<City, int> Cities { get; }
        public IDictionaryRepository<VwCity, int> VwCities { get; }

        public IDictionaryRepository<Manufacturer, int> Manufacturers { get; }

        public IDictionaryRepository<CarModel, int> CarModels { get; }

        public IDictionaryRepository<CarCategory, int> CarCategories { get; }

        public IDictionaryRepository<Transmision, int> Transmissions { get; }

        public IDictionaryRepository<FuelType, int> FuelTypes { get; }

        public IDictionaryRepository<WheelType, int> WheelTypes { get; }

        public void Save()
        {
            _dbContext.SaveChanges();
        }

        public async Task SaveAsync()
        {
            _ = _dbContext.SaveChangesAsync();
        }
    }
}
