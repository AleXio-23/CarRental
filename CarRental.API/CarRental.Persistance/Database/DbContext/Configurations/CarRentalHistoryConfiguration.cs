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
    public class CarRentalHistoryConfiguration : IEntityTypeConfiguration<CarRentalHistory>
    {
        public void Configure(EntityTypeBuilder<CarRentalHistory> builder)
        {
            builder.ToTable("CarRentalHistory", "car");

            builder.Property(e => e.Comment)
                .HasMaxLength(1)
                .IsUnicode(false);

            builder.Property(e => e.RentDateFrom).HasColumnType("datetime");

            builder.Property(e => e.RentDateTo).HasColumnType("datetime");

            builder.HasOne(d => d.Car)
                .WithMany(p => p.CarRentalHistories)
                .HasForeignKey(d => d.CarId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CarRental__CarId__55F4C372");

            builder.HasOne(d => d.CarRentalStatus)
                .WithMany(p => p.CarRentalHistories)
                .HasForeignKey(d => d.CarRentalStatusId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CarRental__CarRe__55009F39");

            builder.HasOne(d => d.Customer)
                .WithMany(p => p.CarRentalHistoryCustomers)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CarRental__Custo__540C7B00");

            builder.HasOne(d => d.LandLord)
                .WithMany(p => p.CarRentalHistoryLandLords)
                .HasForeignKey(d => d.LandLordId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CarRental__LandL__531856C7");
        }
    }
}
