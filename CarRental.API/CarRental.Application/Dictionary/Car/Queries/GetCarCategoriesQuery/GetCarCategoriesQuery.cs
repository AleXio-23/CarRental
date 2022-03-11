using CarRental.Application.Dictionary.Car.Models;
using CarRental.Application.Interfaces.Persistance;
using CarRental.Domain.Dictionary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Queries.GetCarCategoriesQuery
{
    internal class GetCarCategoriesQuery : IGetCarCategoriesQuery
    {
        private readonly ICarRentalDBService _dbService;

        public GetCarCategoriesQuery(ICarRentalDBService dbService)
        {
            _dbService = dbService;
        }

        public List<CarCategoryDTO> Execute()
        {
            var getCategories = _dbService.CarCategories.All();
            List<CarCategoryDTO> carCategoriesDTO = new();
            if(getCategories.Any())
            {
                foreach (var category in getCategories)
                {
                    carCategoriesDTO.Add(new CarCategoryDTO()
                    {
                        Id = category.Id,
                        CategoryName = category.CategoryName
                    });
                }
            }

            return carCategoriesDTO;
        }
    }
}
