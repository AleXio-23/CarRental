using CarRental.Application.Dictionary.Car.Models;
using CarRental.Application.Interfaces.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Queries.GetTransmissionsQuery
{
    class GetTransmissionsQuery:IGetTransmissionsQuery
    {
        private readonly ICarRentalDBService _dbService;

        public GetTransmissionsQuery(ICarRentalDBService dbService)
        {
            _dbService = dbService;
        }

        public List<TransmisionDTO> Execute()
        {
            var transmisions = _dbService.Transmissions.All();

            List<TransmisionDTO> transmisionDTOs = new();
            foreach (var transmission in transmisions)
            {
                transmisionDTOs.Add(new TransmisionDTO() { Id = transmission.Id, TransmisionName= transmission.TransmisionName});
            }

            return transmisionDTOs; 
        }
    }
}
