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

    public class UserRepository<T, I> : Repository<T, I>, IUserRepository<T, I> where T : BaseEntity<I>
    {

        public UserRepository(CarRentalAppDbContext context) : base(context)
        {
        }
    }
}