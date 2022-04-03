using CarRental.Application.User.User.Models;
using CarRental.Application.User.User.Queries.GetUsersQuery;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace CarRental.Application.Tests.UserTests
{
    public class GetUsersQueryTests
    {

        [Fact]

        public void Execute_WhenResultValid_ShouldReturnListOfUsers()
        {
            Mock<IGetUsersQuery> userValidator = new();

            userValidator.Setup( x=> x.Execute()).Returns(new List<UserDTO>());


        }

    }
}
    