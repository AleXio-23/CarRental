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
    public class PriceTypeConfiguration : IEntityTypeConfiguration<PriceType>
    {
        public void Configure(EntityTypeBuilder<PriceType> builder)
        {
            builder.ToTable("PriceType", "dictionary");

            builder.Property(e => e.PriceTypeName).HasMaxLength(255);
        }
    }
}
