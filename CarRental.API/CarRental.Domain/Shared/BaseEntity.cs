using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace CarRental.Domain.Shared
{
    public abstract class BaseEntity<T>
    {
        [XmlIgnore]
        public T Id { get; set; }
    }
}
