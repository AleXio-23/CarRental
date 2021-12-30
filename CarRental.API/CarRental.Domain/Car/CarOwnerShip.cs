using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Car
{
    public partial class CarOwnerShip : BaseEntity<int>
    {
        public int UserId { get; set; }
        public int CarId { get; set; }

        public virtual Car Car { get; set; } = null!;
        public virtual Auth.User User { get; set; } = null!;
    }
}
