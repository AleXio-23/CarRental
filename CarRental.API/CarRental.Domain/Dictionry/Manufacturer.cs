using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class Manufacturer : BaseEntity<int>
    {
        public Manufacturer()
        {
            Cars = new HashSet<Car.Car>();
        }


        public string ManufacturerName { get; set; } = null!;

        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
