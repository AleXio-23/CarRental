using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.User.User.Commands.AssignUserToRoleCommand
{
    public interface IAssignUserToRoleCommand
    {
        Task Execute(int userId, int roleId);
    }
}
