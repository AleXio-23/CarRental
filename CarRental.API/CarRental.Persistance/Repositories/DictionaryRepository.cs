using CarRental.Application.Interfaces.Persistance.Processing;
using CarRental.Domain.Shared;
using CarRental.Persistance.Database.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.Repositories
{

    public class DictionaryRepository<T, I> : Repository<T, I>, IDictionaryRepository<T, I> where T : BaseEntity<I>
    {

        public DictionaryRepository(CarRentalAppDbContext context) : base(context)
        {
        }
    }
}