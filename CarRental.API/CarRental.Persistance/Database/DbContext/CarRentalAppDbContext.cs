using CarRental.Domain.Auth;
using CarRental.Domain.Car;
using CarRental.Domain.Dictionary;
using CarRental.Domain.User;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CarRental.Persistance.Database.DbContext
{
    public class CarRentalAppDbContext: IdentityDbContext<User, Role, int> 
    {

        public CarRentalAppDbContext(DbContextOptions<CarRentalAppDbContext> options) : base(options)
        {

        }


        public virtual DbSet<Car> Cars { get; set; } 
        public virtual DbSet<CarCategory> CarCategories { get; set; } 
        public virtual DbSet<CarModel> CarModels { get; set; } 
        public virtual DbSet<CarOwnerShip> CarOwnerShips { get; set; } 
        public virtual DbSet<CarRentalHistory> CarRentalHistories { get; set; } 
        public virtual DbSet<CarRentalStatus> CarRentalStatuses { get; set; } 
        public virtual DbSet<City> Cities { get; set; } 
        public virtual DbSet<Country> Countries { get; set; } 
        public virtual DbSet<CurrentCarRentalStatus> CurrentCarRentalStatuses { get; set; } 
        public virtual DbSet<FuelType> FuelTypes { get; set; } 
        public virtual DbSet<Manufacturer> Manufacturers { get; set; } 
        public virtual DbSet<PriceCourse> PriceCourses { get; set; } 
        public virtual DbSet<PriceType> PriceTypes { get; set; } 
        public virtual DbSet<Transmision> Transmisions { get; set; } 
        public virtual DbSet<UserProfile> UserProfiles { get; set; } 
        public virtual DbSet<WheelType> WheelTypes { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(GetType().Assembly);
            base.OnModelCreating(builder);
        }

     



    }
}
