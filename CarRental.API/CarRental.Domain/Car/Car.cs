using CarRental.Domain.Dictionary;
using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Car
{
    public partial class Car : BaseEntity<int>
    {
        public Car()
        {
            CarRentalHistories = new HashSet<CarRentalHistory>();
            CurrentCarRentalStatuses = new HashSet<CurrentCarRentalStatus>();
        }

  
        public int ManufacturerId { get; set; }
        public int CarModelId { get; set; }
        public int CarCategoryId { get; set; }
        public int? ReleaseYear { get; set; }
        public decimal Price { get; set; }
        public int PriceTypeId { get; set; }
        public int PriceCourseId { get; set; }
        public decimal EngineCapacity { get; set; }
        public int TransmisionId { get; set; }
        public int FuelTypeId { get; set; }
        public int WheelTypeId { get; set; }
        public int LocationCountryId { get; set; }
        public int LocationCityId { get; set; }
        public string? VinNum { get; set; }
        public string? CarRegisterNumber { get; set; }

        public virtual CarCategory CarCategory { get; set; } = null!;
        public virtual CarModel CarModel { get; set; } = null!;
        public virtual FuelType FuelType { get; set; } = null!;
        public virtual City LocationCity { get; set; } = null!;
        public virtual Country LocationCountry { get; set; } = null!;
        public virtual Manufacturer Manufacturer { get; set; } = null!;
        public virtual PriceCourse PriceCourse { get; set; } = null!;
        public virtual PriceType PriceType { get; set; } = null!;
        public virtual Transmision Transmision { get; set; } = null!;
        public virtual WheelType WheelType { get; set; } = null!;
        public virtual ICollection<CarRentalHistory> CarRentalHistories { get; set; }
        public virtual ICollection<CurrentCarRentalStatus> CurrentCarRentalStatuses { get; set; }
    }
}
