using CarRental.Application.Interfaces.Persistance;
using CarRental.Domain.Shared;
using CarRental.Persistance.Database.DbContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Persistance.Repositories
{
    public class Repository<T, I> : IRepository<T, I> where T : BaseEntity<I>
    {
        private readonly bool shareContext;

        protected CarRentalAppDbContext context { get; set; }
        protected DbSet<T> DbSet { get; set; }
        protected IQueryable<T> Queryable { get; set; }

        public Repository(CarRentalAppDbContext dbContext)
        {
            context = dbContext;
            DbSet = dbContext.Set<T>();
            Queryable = DbSet;
            shareContext = true;
        }

        public int Count => Queryable.Count();

        public IQueryable<T> Local => DbSet.Local.AsQueryable();

        public T Add(T newObject)
        {
            return DbSet.Add(newObject).Entity;
        }

        public IQueryable<T> All()
        {
            return Queryable;
        }

        public bool Any(Expression<Func<T, bool>> predicate)
        {
            return Queryable.Any(predicate);
        }

        public bool Any()
        {
            return Queryable.Any();
        }

        public async Task<bool> AnyAsync(Expression<Func<T, bool>> predicate)
        {
            return await Queryable.AnyAsync(predicate);
        }

        public async Task<bool> AnyAsync()
        {
            return await Queryable.AnyAsync();
        }

        public bool Changed()
        {
            return context.ChangeTracker.HasChanges();
        }

        public bool Contains(Expression<Func<T, bool>> predicate)
        {
            return Queryable.Count(predicate) > 0;
        }

        public async Task<bool> ContainsAsync(Expression<Func<T, bool>> predicate)
        {
            return await Queryable.CountAsync(predicate) > 0;
        }

        public void Delete(I id)
        {
            var ent = DbSet.Find(id);
            if (id == null)
            {
                throw new ArgumentNullException();
            }
            if (ent == null)
            {
                throw new Exception($"Object with id: {id} Not Found!");
            }
            DbSet.Remove(ent);
        }
        public void Delete(T deleteObject)
        {
            DbSet.Remove(deleteObject);
        }

        public void DeleteAll()
        {
            var all = All();
            foreach (var item in all)
            {
                Delete(item);
            }
        }

        public void Dispose()
        {
            if (shareContext)
            {
                context.Dispose();
            }
        }

        public T Find(params object[] keys)
        {
            return DbSet.Find(keys);
        }


        public T Find(Expression<Func<T, bool>> predicate)
        {
            return Queryable.FirstOrDefault(predicate);
        }
        public async Task<T> FindAsync(Expression<Func<T, bool>> predicate)
        {
            return await Queryable.FirstOrDefaultAsync(predicate);
        }

        public T FirstOrDefault()
        {
            return Queryable.FirstOrDefault();
        }

        public T FirstOrDefault(Expression<Func<T, bool>> predicate)
        {
            return Queryable.FirstOrDefault(predicate);
        }

        public async Task<T> FirstOrDefaultAsync()
        {
            return await Queryable.FirstOrDefaultAsync();
        }

        public async Task<T> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate)
        {
            return await Queryable.FirstOrDefaultAsync(predicate);
        }

        public T GetById(I id)
        {
            return Find(id);
        }

        public T LastOrDefault<TKey>(Expression<Func<T, bool>> predicate, Expression<Func<T, TKey>> order)
        {
            return Queryable.Where(predicate).OrderByDescending(order).FirstOrDefault();
        }

        public void MarkAsDeleted(T deleteObject, T? userId)
        {
            throw new NotImplementedException();
        }

        public void MarkAsDeleted(Expression<Func<T, bool>> predicate, T? userId)
        {
            throw new NotImplementedException();
        }

        public void MarkAsDeleted(I id, T? userId)
        {
            throw new NotImplementedException();
        }

        public int Save()
        {
            return context.SaveChanges();
        }

        public async Task<int> SaveAsync()
        {
            return await context.SaveChangesAsync();
        }

        public async Task<T> SingleOrDefaultAsync(Expression<Func<T, bool>> predicate)
        {
            return await Queryable.SingleOrDefaultAsync(predicate);
        }

        public T SingleOrDefault(Expression<Func<T, bool>> predicate)
        {
            return Queryable.SingleOrDefault(predicate);
        }

        public void Update(T updateObject)
        {
            var entity = context.Entry(updateObject);
            var modifyDatePropertyIfExit = updateObject.GetType().GetProperty("ModifiedDate");
            modifyDatePropertyIfExit?.SetValue(updateObject, DateTime.Now);

            DbSet.Attach(updateObject);

            entity.State = EntityState.Modified;

            var excluded = new[] { "CreateDate", "CreatorUserId", "DeletedDate", "DeleterUserId", "IsDeleted" };

            var propertyNames = entity.CurrentValues.Properties.Select(p => p.Name);
            foreach (var property in propertyNames.Where(x => excluded.Contains(x)))
            {
                entity.Property(property).IsModified = false;
            }
        }

        public List<T> Update(Expression<Func<T, bool>> predicate, Expression<Func<T, T>> updateFactory)
        {
            throw new NotImplementedException();
        }
    }
}
