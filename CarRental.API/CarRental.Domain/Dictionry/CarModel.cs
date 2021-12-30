using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class CarModel : BaseEntity<int>
    {
        public CarModel()
        {
            Cars = new HashSet<Car.Car>();
        }
         
        public string Name { get; set; } = null!;
        public int ManufacturerId { get; set; }

        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
