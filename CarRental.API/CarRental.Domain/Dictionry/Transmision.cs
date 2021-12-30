using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class Transmision : BaseEntity<int>
    {
        public Transmision()
        {
            Cars = new HashSet<Car.Car>();
        }
         
        public string TransmisionName { get; set; } = null!;

        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
