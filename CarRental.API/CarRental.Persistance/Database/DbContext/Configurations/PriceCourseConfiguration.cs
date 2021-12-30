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
    public class PriceCourseConfiguration : IEntityTypeConfiguration<PriceCourse>
    {
        public void Configure(EntityTypeBuilder<PriceCourse> builder)
        {
            builder.ToTable("PriceCourse", "dictionary");

            builder.Property(e => e.PriceCourseName).HasMaxLength(255);
        }
    }
}
