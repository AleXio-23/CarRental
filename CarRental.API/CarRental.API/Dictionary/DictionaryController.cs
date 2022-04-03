using CarRental.API.Dictionary.Models;
using CarRental.Application.Dictionary.Car.Models;
using CarRental.Application.Dictionary.Car.Queries.GetCarCategoriesQuery;
using CarRental.Application.Dictionary.Car.Queries.GetCarModelsQuery;
using CarRental.Application.Dictionary.Car.Queries.GetFuelTypesQuery;
using CarRental.Application.Dictionary.Car.Queries.GetManufacturerQuery;
using CarRental.Application.Dictionary.Car.Queries.GetTransmissionsQuery;
using CarRental.Application.Dictionary.Car.Queries.GetWheelTypesQuery;
using CarRental.Application.Dictionary.City.Models;
using CarRental.Application.Dictionary.City.Queries.GetCitiesQuery;
using CarRental.Domain.Dictionary;
using CarRental.Persistance.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRental.API.Dictionary
{
    [Route("[controller]")]
    [ApiController]
    public class DictionaryController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IServiceScopeFactory serviceScopeFactory;

        public DictionaryController(IConfiguration configuration, IServiceScopeFactory serviceScopeFactory)
        {
            this.configuration = configuration;
            this.serviceScopeFactory = serviceScopeFactory;
        }



        [HttpPost("GetCities")]
        public ActionResult<ServiceResult<List<VwCityDTO>>> GetCities([FromBody] DefaultRequestModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var citiesHandler = scope.ServiceProvider.GetService<IGetCitiesQuery>();
            var result = citiesHandler.Execute();

            return new ServiceResult<List<VwCityDTO>> { Success = true, Data = result };

        }



        [HttpPost("GetManufacturers")]
        public ActionResult<ServiceResult<List<ManufacturerDTO>>> GetManufacturers([FromBody] DefaultRequestModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var manufacturersHandler = scope.ServiceProvider.GetService<IGetManufacturerQuery>();
            var result = manufacturersHandler?.Execute();

            return new ServiceResult<List<ManufacturerDTO>> { Success = true, Data = result };

        }


        [HttpPost("GetCarModels")]
        public ActionResult<ServiceResult<List<CarModelDTO>>> GetCarModels([FromBody] CarModelsFilter filter)
        {
            var scope = serviceScopeFactory.CreateScope();
            var carModelsHandler = scope.ServiceProvider.GetService<IGetCarModelsQuery>();
            var result = carModelsHandler?.Execute(filter);

            return new ServiceResult<List<CarModelDTO>> { Success = true, Data = result };

        }


        [HttpPost("GetCarCategories")]
        public ActionResult<ServiceResult<List<CarCategoryDTO>>> GetCarCategories([FromBody] DefaultRequestModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var carCategoriesHandler = scope.ServiceProvider.GetService<IGetCarCategoriesQuery>();
            var result = carCategoriesHandler?.Execute();

            return new ServiceResult<List<CarCategoryDTO>> { Success = true, Data = result };

        }

        [HttpPost("GetTransmisions")]
        public ActionResult<ServiceResult<List<TransmisionDTO>>> GetTransmisions([FromBody] DefaultRequestModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var carTransmissionsHandler = scope.ServiceProvider.GetService<IGetTransmissionsQuery>();
            var result = carTransmissionsHandler?.Execute();

            return new ServiceResult<List<TransmisionDTO>> { Success = true, Data = result };

        }

        [HttpPost("GetFuelTypes")]
        public ActionResult<ServiceResult<List<FuelTypeDTO>>> GetFuelTypes([FromBody] DefaultRequestModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var carFuelTypesHandler = scope.ServiceProvider.GetService<IGetFuelTypesQuery>();
            var result = carFuelTypesHandler?.Execute();

            return new ServiceResult<List<FuelTypeDTO>> { Success = true, Data = result };

        }

        [HttpPost("GetWheelTypes")]
        public ActionResult<ServiceResult<List<WheelTypeDTO>>> GetWheelTypes([FromBody] DefaultRequestModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var wheelTypesHandler = scope.ServiceProvider.GetService<IGetWheelTypesQuery>();
            var result = wheelTypesHandler?.Execute();

            return new ServiceResult<List<WheelTypeDTO>> { Success = true, Data = result };

        }
    }
}
