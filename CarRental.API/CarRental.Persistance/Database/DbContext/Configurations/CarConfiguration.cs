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
    public class CarConfiguration : IEntityTypeConfiguration<Car>
    {
        public void Configure(EntityTypeBuilder<Car> builder)
        {
            builder.ToTable("Car", "car");

            builder.Property(e => e.CarRegisterNumber)
                .HasMaxLength(1)
                .IsUnicode(false);

            builder.Property(e => e.EngineCapacity).HasColumnType("decimal(18, 0)");

            builder.Property(e => e.Price).HasColumnType("decimal(18, 0)");

            builder.Property(e => e.VinNum)
                .HasMaxLength(1)
                .IsUnicode(false);

            builder.HasOne(d => d.CarCategory)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.CarCategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__CarCategory__498EEC8D");

            builder.HasOne(d => d.CarModel)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.CarModelId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__CarModelId__489AC854");

            builder.HasOne(d => d.FuelType)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.FuelTypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__FuelTypeId__4D5F7D71");

            builder.HasOne(d => d.LocationCity)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.LocationCityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__LocationCit__503BEA1C");

            builder.HasOne(d => d.LocationCountry)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.LocationCountryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__LocationCou__4F47C5E3");

            builder.HasOne(d => d.Manufacturer)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.ManufacturerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__Manufacture__47A6A41B");

            builder.HasOne(d => d.PriceCourse)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.PriceCourseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__PriceCourse__4B7734FF");

            builder.HasOne(d => d.PriceType)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.PriceTypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__PriceTypeId__4A8310C6");

            builder.HasOne(d => d.Transmision)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.TransmisionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__Transmision__4C6B5938");

            builder.HasOne(d => d.WheelType)
                .WithMany(p => p.Cars)
                .HasForeignKey(d => d.WheelTypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Car__WheelTypeId__4E53A1AA");
        }
    }
}
