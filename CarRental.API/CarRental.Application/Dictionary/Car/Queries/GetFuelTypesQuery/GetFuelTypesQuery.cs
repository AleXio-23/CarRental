using CarRental.Application.Dictionary.Car.Models;
using CarRental.Application.Interfaces.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Queries.GetFuelTypesQuery
{
    class GetFuelTypesQuery : IGetFuelTypesQuery
    {
        private readonly ICarRentalDBService _dbService;

        public GetFuelTypesQuery(ICarRentalDBService dbService)
        {
            _dbService = dbService;
        }
        public List<FuelTypeDTO> Execute()
        {
            var fueltypes = _dbService.FuelTypes.All();

            List<FuelTypeDTO> fuelTypeDtos = new();
            foreach (var fueltype in fueltypes)
            {
                fuelTypeDtos.Add(new FuelTypeDTO() { Id = fueltype.Id, FuelTypeName = fueltype.FuelTypeName });
            }

            return fuelTypeDtos;
        }
    }
}
