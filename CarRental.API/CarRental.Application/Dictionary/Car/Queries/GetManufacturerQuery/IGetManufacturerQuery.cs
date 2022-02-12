using CarRental.Application.Dictionary.Car.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Queries.GetManufacturerQuery
{
    public interface IGetManufacturerQuery
    {
        List<ManufacturerDTO> Execute();
    }
}
