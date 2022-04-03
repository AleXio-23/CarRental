using CarRental.Application.Dictionary.Car.Models;
using CarRental.Application.Interfaces.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Queries.GetManufacturerQuery
{
    class GetManufacturerQuery : IGetManufacturerQuery
    {
        private readonly ICarRentalDBService _dbService;

        public GetManufacturerQuery(ICarRentalDBService dbService)
        {
            _dbService = dbService;
        }
        public List<ManufacturerDTO> Execute()
        {

            var getManufacturers = _dbService.Manufacturers.All();
            List<ManufacturerDTO> result = new List<ManufacturerDTO>(); 

            foreach (var manufacturer in getManufacturers)
            {
                result.Add(new ManufacturerDTO()
                {
                    Id = manufacturer.Id,
                    ManufacturerName = manufacturer.ManufacturerName,
                    Code = manufacturer.Code
                });
            }

            return result;
        }
    }
}
