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
    public class CurrentCarRentalStatusConfiguration : IEntityTypeConfiguration<CurrentCarRentalStatus>
    {
        public void Configure(EntityTypeBuilder<CurrentCarRentalStatus> builder)
        {
            builder.ToTable("CurrentCarRentalStatus", "car");

            builder.Property(e => e.RentDateFrom).HasColumnType("datetime");

            builder.Property(e => e.RentDateTo).HasColumnType("datetime");

            builder.HasOne(d => d.Car)
                .WithMany(p => p.CurrentCarRentalStatuses)
                .HasForeignKey(d => d.CarId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CurrentCa__CarId__5BAD9CC8");

            builder.HasOne(d => d.CarRentalStatus)
                .WithMany(p => p.CurrentCarRentalStatuses)
                .HasForeignKey(d => d.CarRentalStatusId)
                .HasConstraintName("FK__CurrentCa__CarRe__5AB9788F");

            builder.HasOne(d => d.Customer)
                .WithMany(p => p.CurrentCarRentalStatusCustomers)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("FK__CurrentCa__Custo__59C55456");

            builder.HasOne(d => d.LandLord)
                .WithMany(p => p.CurrentCarRentalStatusLandLords)
                .HasForeignKey(d => d.LandLordId)
                .HasConstraintName("FK__CurrentCa__LandL__58D1301D");
        }
    }
}
