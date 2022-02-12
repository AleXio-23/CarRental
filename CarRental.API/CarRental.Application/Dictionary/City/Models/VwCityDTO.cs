using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.City.Models
{
    public class VwCityDTO
    {
        public int Id { get; set; }
        public string CityName { get; set; } 
        public int CountryId { get; set; }
        public string CountryName { get; set; }
    }
}
