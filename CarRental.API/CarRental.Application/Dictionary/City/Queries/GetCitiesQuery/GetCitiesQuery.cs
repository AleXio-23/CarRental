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

        public List<CityDTO> Execute()
        {
            var cities = _dbService.Cities.All();
            var citiesDto = new List<CityDTO>();

            foreach (var city in cities)
            {
                citiesDto.Add(new CityDTO() { Id = city.Id, CityName = city.CityName, CountryId= city.CountryId });  
            }

            return citiesDto;
        }
    }
}
