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
    public class WheelTypeConfiguraton : IEntityTypeConfiguration<WheelType>
    {
        public void Configure(EntityTypeBuilder<WheelType> builder)
        {
            builder.ToTable("WheelType", "dictionary");

            builder.Property(e => e.WheelTypeName).HasMaxLength(255);
        }
    }
}
