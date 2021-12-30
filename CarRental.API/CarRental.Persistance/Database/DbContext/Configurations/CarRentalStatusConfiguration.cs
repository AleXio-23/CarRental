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
    public class CarRentalStatusConfiguration : IEntityTypeConfiguration<CarRentalStatus>
    {
        public void Configure(EntityTypeBuilder<CarRentalStatus> builder)
        {
            builder.ToTable("CarRentalStatus", "dictionary");

            builder.Property(e => e.Status).HasMaxLength(255);
        }
    }
}
