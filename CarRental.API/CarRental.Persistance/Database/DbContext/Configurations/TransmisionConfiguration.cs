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
    public class TransmisionConfiguration : IEntityTypeConfiguration<Transmision>
    {
        public void Configure(EntityTypeBuilder<Transmision> builder)
        {
            builder.ToTable("Transmision", "dictionary");

            builder.Property(e => e.TransmisionName).HasMaxLength(255);
        }
    }
}
