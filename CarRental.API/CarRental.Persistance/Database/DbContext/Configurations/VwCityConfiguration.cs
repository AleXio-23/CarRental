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
    public class VwCityConfiguration : IEntityTypeConfiguration<VwCity>
    {
        public void Configure(EntityTypeBuilder<VwCity> builder)
        {
            builder.ToTable("vwCity", "dictionary");

            builder.Property(e => e.CityName).HasMaxLength(255);

         
        }
    }
}
