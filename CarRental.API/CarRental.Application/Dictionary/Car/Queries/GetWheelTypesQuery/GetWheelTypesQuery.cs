using CarRental.Application.Dictionary.Car.Models;
using CarRental.Application.Interfaces.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Queries.GetWheelTypesQuery
{
      class GetWheelTypesQuery: IGetWheelTypesQuery
    {
        private readonly ICarRentalDBService _dbService;

        public GetWheelTypesQuery(ICarRentalDBService dbService)
        {
            _dbService = dbService;
        }

        public List<WheelTypeDTO> Execute()
        {
            var wheelTypes = _dbService.WheelTypes.All();

            List<WheelTypeDTO> wheelTypesDTOs = new();
            foreach (var wheelType in wheelTypes)
            {
                wheelTypesDTOs.Add(new WheelTypeDTO() { Id = wheelType.Id, WheelTypeName = wheelType.WheelTypeName });
            }

            return wheelTypesDTOs;
        }
    }
}
