using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class FuelType : BaseEntity<int>
    {
        public FuelType()
        {
            Cars = new HashSet<Car.Car>();
        }
         
        public string FuelTypeName { get; set; } = null!;

        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
