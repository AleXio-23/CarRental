﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Interfaces.Persistance
{
    public interface IDbService
    {
        Task SaveAsync();
        void Save();
    }
}
