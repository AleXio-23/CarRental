using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Infrastructure.Auth.Models
{
    public class TokenModel
    {
        public string Token { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}
