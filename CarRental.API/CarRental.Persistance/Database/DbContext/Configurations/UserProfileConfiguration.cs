using CarRental.Domain.User;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.Database.DbContext.Configurations
{
    public class UserProfileConfiguration : IEntityTypeConfiguration<UserProfile>
    {
        public void Configure(EntityTypeBuilder<UserProfile> builder)
        {
            builder.ToTable("UserProfile", "user");

            builder.Property(e => e.BirthDate).HasColumnType("date");

            builder.Property(e => e.Firstname).HasMaxLength(255);

            builder.Property(e => e.Lastname).HasMaxLength(255);

            builder.Property(e => e.PersonalNumber)
                .HasMaxLength(11)
                .IsUnicode(false);

            builder.Property(e => e.Phone1)
                .HasMaxLength(1)
                .IsUnicode(false);

            builder.Property(e => e.Phone2)
                .HasMaxLength(1)
                .IsUnicode(false);

            builder.Property(e => e.ProfileImage)
                .HasMaxLength(1)
                .IsUnicode(false);

            builder.HasOne(d => d.User)
                .WithMany(p => p.UserProfiles)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__UserProfi__UserI__18EBB532");
        }
    }
}
