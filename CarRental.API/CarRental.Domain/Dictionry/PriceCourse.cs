using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class PriceCourse : BaseEntity<int>
    {
        public PriceCourse()
        {
            Cars = new HashSet<Car.Car>();
        }
         
        public string PriceCourseName { get; set; } = null!;

        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
