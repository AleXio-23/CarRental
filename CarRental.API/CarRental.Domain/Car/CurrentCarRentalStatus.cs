using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Car
{
    public partial class CurrentCarRentalStatus : BaseEntity<int>
    { 
        public int? LandLordId { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? RentDateFrom { get; set; }
        public DateTime? RentDateTo { get; set; }
        public int? CarRentalStatusId { get; set; }
        public int CarId { get; set; }

        public virtual Car Car { get; set; } = null!;
        public virtual CarRentalStatus? CarRentalStatus { get; set; }
        public virtual Auth.User? Customer { get; set; }
        public virtual Auth.User? LandLord { get; set; }
    }
}
