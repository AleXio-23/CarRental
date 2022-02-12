using CarRental.Application.Dictionary.City.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Dictionary.City.Queries.GetCitiesQuery
{
    public interface IGetCitiesQuery
    {
        List<VwCityDTO> Execute();
    }
}
