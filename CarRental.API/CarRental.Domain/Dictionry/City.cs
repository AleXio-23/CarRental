using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class City : BaseEntity<int>
    {
        public City()
        {
            Cars = new HashSet<Car.Car>();
        }
         
        public string CityName { get; set; } = null!;
        public int CountryId { get; set; }

        public virtual Country Country { get; set; } = null!;
        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
