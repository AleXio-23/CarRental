using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Interfaces.Persistance.Processing
{ 
    public interface IUserRepository<T, I> : IRepository<T, I> where T : BaseEntity<I>
    {
    }
}
