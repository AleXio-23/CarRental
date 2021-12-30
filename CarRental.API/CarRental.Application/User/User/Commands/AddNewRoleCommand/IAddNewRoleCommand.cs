using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.User.User.Commands.AddNewRoleCommand
{
    public interface IAddNewRoleCommand
    {
        Task<IdentityResult> Execute(string roleName);
    }
}
