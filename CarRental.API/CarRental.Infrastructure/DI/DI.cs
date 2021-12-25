using CarRental.Infrastructure.Auth;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Infrastructure.DI
{
    public static class DI
    {
        public static IServiceCollection RegisterPersistanceServices(this IServiceCollection services)
        {
            services.AddScoped<IAuthorization, Authorization>();

            return services;
        }
    }
}
