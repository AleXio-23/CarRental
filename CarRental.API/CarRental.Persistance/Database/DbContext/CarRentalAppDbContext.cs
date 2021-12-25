using CarRental.Domain.Auth;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.Database.DbContext
{
    public class CarRentalAppDbContext: IdentityDbContext<User, Role, int> 
    {

        public CarRentalAppDbContext(DbContextOptions<CarRentalAppDbContext> options) : base(options)
        {

        }
    }
}
