using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Models
{
    public class ManufacturerDTO
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string ManufacturerName { get; set; } = null!;
    }
}
