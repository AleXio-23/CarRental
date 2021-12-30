using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;

namespace  CarRental.Domain.User
{
    public partial class UserProfile: BaseEntity<int>
    {
      
        public int UserId { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public DateTime? BirthDate { get; set; }
        public string? PersonalNumber { get; set; }
        public string? Phone1 { get; set; }
        public string? Phone2 { get; set; }
        public string? ProfileImage { get; set; }

        public virtual Auth.User User { get; set; } = null!;
    }
}
