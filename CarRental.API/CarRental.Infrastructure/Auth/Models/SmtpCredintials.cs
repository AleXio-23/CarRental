using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Infrastructure.Auth.Models
{
    public class SmtpCredintials
    {
        public string MailFrom { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public string NetworkCredintialUsername { get; set; }
        public string Password { get; set; }
    }
}
