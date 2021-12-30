using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class WheelType : BaseEntity<int>
    {
        public WheelType()
        {
            Cars = new HashSet<Car.Car>();
        }
         
        public string WheelTypeName { get; set; } = null!;

        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
