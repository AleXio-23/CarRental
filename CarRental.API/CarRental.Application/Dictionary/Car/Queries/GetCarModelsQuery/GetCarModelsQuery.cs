using CarRental.Application.Dictionary.Car.Models;
using CarRental.Application.Interfaces.Persistance;
using CarRental.Domain.Dictionary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Queries.GetCarModelsQuery
{
    class GetCarModelsQuery: IGetCarModelsQuery
    {
        private readonly ICarRentalDBService _dbService;

        public GetCarModelsQuery(ICarRentalDBService dbService)
        {
            _dbService = dbService;
        }

        public List<CarModelDTO> Execute(CarModelsFilter filter)
        {
            List<CarModel> carModels = new();    
            List<CarModelDTO> carModelsDTO = new();

            if(filter.ManufacturerIds.Count > 0)
            {
                var getModelsOnId = _dbService.CarModels.All();
                foreach (var manufId in filter.ManufacturerIds)
                {
                    var getList = getModelsOnId.Where(x => x.ManufacturerId == manufId).ToList();
                   if(getList.Count > 0)
                    {
                        foreach (var foundList in getList)
                        {
                            carModelsDTO.Add(new CarModelDTO()
                            {
                                Id = foundList.Id,
                                ManufacturerId = foundList.ManufacturerId,
                                Code = foundList.Code,
                                Name = foundList.Name
                            });
                        }
                    }

                }
            }

            return carModelsDTO.OrderBy(x => x.Name).ToList();
        }
    }
}
