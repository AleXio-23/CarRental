using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class CarCategory : BaseEntity<int>
    {
        public CarCategory()
        {
            Cars = new HashSet<Car.Car>();
        }
         
        public string CategoryName { get; set; } = null!;

        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
