using CarRental.API.Dictionary.Models;
using CarRental.Application.Dictionary.Car.Models;
using CarRental.Application.Dictionary.Car.Queries.GetManufacturerQuery;
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
            var result = manufacturersHandler.Execute();

            return new ServiceResult<List<ManufacturerDTO>> { Success = true, Data = result };

        }
    }
}
