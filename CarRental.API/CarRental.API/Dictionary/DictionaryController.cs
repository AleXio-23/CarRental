using CarRental.API.Dictionary.Models;
using CarRental.Application.Dictionary.City.Models;
using CarRental.Application.Dictionary.City.Queries.GetCitiesQuery;
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
        public ActionResult<ServiceResult<List<CityDTO>>> GetCities([FromBody] GetCitiesModel model)
        {
            var scope = serviceScopeFactory.CreateScope();
            var citiesHandler = scope.ServiceProvider.GetService<IGetCitiesQuery>();
            var result = citiesHandler.Execute();

            return new ServiceResult<List<CityDTO>> { Success = true, Data = result };

        }
    }
}
