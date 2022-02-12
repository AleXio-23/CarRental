using CarRental.Application.Dictionary.City.Models;
using CarRental.Application.Interfaces.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.City.Queries.GetCitiesQuery
{
    class GetCitiesQuery : IGetCitiesQuery
    {
        private ICarRentalDBService _dbService;

        public GetCitiesQuery(ICarRentalDBService dbService)
        {
            _dbService = dbService;
        }

        public List<VwCityDTO> Execute()
        {
            var cities = _dbService.VwCities.All();
            var citiesDto = new List<VwCityDTO>();

            foreach (var city in cities)
            {
                citiesDto.Add(new VwCityDTO() { Id = city.Id, CityName = city.CityName, CountryId= city.CountryId, CountryName = city.CountryName });  
            }

            return citiesDto;
        }
    }
}
