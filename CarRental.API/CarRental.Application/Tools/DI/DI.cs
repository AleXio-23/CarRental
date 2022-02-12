using CarRental.Application.Dictionary.Car.Queries.GetManufacturerQuery;
using CarRental.Application.Dictionary.City.Queries.GetCitiesQuery;
using CarRental.Application.User.User.Commands.AddNewRoleCommand;
using CarRental.Application.User.User.Commands.AssignUserToRoleCommand;
using CarRental.Application.User.User.Queries.GetUsersQuery;
using CarRental.Application.User.UserProfile.Queries.GetUserProfileQuery;
using Microsoft.Extensions.DependencyInjection;

namespace CarRental.Application.Tools.DI
{
    public static class DI
    {
        public static IServiceCollection RegisterGameApplicationServices(this IServiceCollection services)
        {

            services.AddScoped<IGetUserProfileQuery, GetUserProfileQuery>();
            services.AddScoped<IGetUsersQuery, GetUsersQuery>();
            services.AddScoped<IAddNewRoleCommand, AddNewRoleCommand>();
            services.AddScoped<IAssignUserToRoleCommand, AssignUserToRoleCommand>();
            services.AddScoped<IGetCitiesQuery, GetCitiesQuery>(); 
            services.AddScoped<IGetManufacturerQuery, GetManufacturerQuery>(); 
           

            return services;
        }
    }
}
