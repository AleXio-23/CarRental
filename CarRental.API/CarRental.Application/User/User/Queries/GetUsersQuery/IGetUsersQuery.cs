using CarRental.Application.User.User.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.User.User.Queries.GetUsersQuery
{
    public interface IGetUsersQuery
    {
        List<UserDTO> Execute();
    }
}
