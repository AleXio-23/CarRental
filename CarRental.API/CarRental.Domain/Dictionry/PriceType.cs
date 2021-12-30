using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace CarRental.Domain.Dictionary
{
    public partial class PriceType : BaseEntity<int>
    {
        public PriceType()
        {
            Cars = new HashSet<Car.Car>();
        }
         
        public string PriceTypeName { get; set; } = null!;

        public virtual ICollection<Car.Car> Cars { get; set; }
    }
}
