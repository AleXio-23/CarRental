using CarRental.Domain.Dictionary;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.Database.DbContext.Configurations
{
    public class ManufacturerConfiguration : IEntityTypeConfiguration<Manufacturer>
    {
        public void Configure(EntityTypeBuilder<Manufacturer> builder)
        {

            builder.ToTable("Manufacturer", "dictionary");

            builder.Property(e => e.ManufacturerName).HasMaxLength(255);
            builder.Property(e => e.Code).HasMaxLength(255);
        }
    }
}
