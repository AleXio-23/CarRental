using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class Country : BaseEntity<int>
    {
        public Country()
        {
            Cars = new HashSet<Car.Car>();
            Cities = new HashSet<City>();
        }
         
        public string CountryName { get; set; } = null!;

        public virtual ICollection<Car.Car> Cars { get; set; }
        public virtual ICollection<City> Cities { get; set; }
    }
}
