using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Infrastructure.Auth.Models
{
    public class RegistrationResponse
    {
        public bool Succees { get; set; }
        public bool ErrorOccured { get; set; }

        public string Mail { get; set; }
        public string ErrorMessage { get; set; }
    }
}
