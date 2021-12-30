using CarRental.Domain.Car;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.Database.DbContext.Configurations
{
    public class CarOwnerShipConfiguration : IEntityTypeConfiguration<CarOwnerShip>
    {
        public void Configure(EntityTypeBuilder<CarOwnerShip> builder)
        {
           

            builder.ToTable("CarOwnerShip", "car");

            builder.HasOne(d => d.Car)
                .WithMany()
                .HasForeignKey(d => d.CarId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CarOwnerS__CarId__5E8A0973");

            builder.HasOne(d => d.User)
                .WithMany()
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CarOwnerS__UserI__5D95E53A");
        }
    }
}
