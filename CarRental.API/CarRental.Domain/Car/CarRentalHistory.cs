using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Car
{
    public partial class CarRentalHistory : BaseEntity<int>
    { 
        public int LandLordId { get; set; }
        public int CustomerId { get; set; }
        public DateTime RentDateFrom { get; set; }
        public DateTime RentDateTo { get; set; }
        public int CarRentalStatusId { get; set; }
        public int CarId { get; set; }
        public string? Comment { get; set; }

        public virtual Car Car { get; set; } = null!;
        public virtual CarRentalStatus CarRentalStatus { get; set; } = null!;
        public virtual Auth.User Customer { get; set; } = null!;
        public virtual Auth.User LandLord { get; set; } = null!;
    }
}
