using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Car
{
    public partial class CarRentalStatus : BaseEntity<int>
    {
        public CarRentalStatus()
        {
            CarRentalHistories = new HashSet<CarRentalHistory>();
            CurrentCarRentalStatuses = new HashSet<CurrentCarRentalStatus>();
        }
         
        public string Status { get; set; } = null!;

        public virtual ICollection<CarRentalHistory> CarRentalHistories { get; set; }
        public virtual ICollection<CurrentCarRentalStatus> CurrentCarRentalStatuses { get; set; }
    }
}
