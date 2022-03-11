using CarRental.Application.Dictionary.Car.Queries.GetCarCategoriesQuery;
using CarRental.Application.Dictionary.Car.Queries.GetCarModelsQuery;
using CarRental.Application.Dictionary.Car.Queries.GetFuelTypesQuery;
using CarRental.Application.Dictionary.Car.Queries.GetManufacturerQuery;
using CarRental.Application.Dictionary.Car.Queries.GetTransmissionsQuery;
using CarRental.Application.Dictionary.Car.Queries.GetWheelTypesQuery;
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
            services.AddScoped<IGetCarModelsQuery, GetCarModelsQuery>();
            services.AddScoped<IGetCarCategoriesQuery, GetCarCategoriesQuery>();
            services.AddScoped<IGetTransmissionsQuery, GetTransmissionsQuery>();
            services.AddScoped<IGetFuelTypesQuery, GetFuelTypesQuery>();
            services.AddScoped<IGetWheelTypesQuery, GetWheelTypesQuery>();


            return services;
        }
    }
}
