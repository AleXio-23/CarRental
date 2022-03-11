using CarRental.Application.Dictionary.Car.Models;
using CarRental.Domain.Dictionary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.Car.Queries.GetCarCategoriesQuery
{
    public interface IGetCarCategoriesQuery
    {
        List<CarCategoryDTO> Execute();
    }
}
