using CarRental.Domain.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Application.Interfaces.Persistance
{
    public interface IRepository<T, I >: IDisposable where T: BaseEntity<I>
    {
        bool Changed();
        int Save();
        Task<int> SaveAsync();
        IQueryable<T> All();
        void Delete(I id);
        bool Contains(Expression<Func<T, bool>> predicate);
        Task<bool> ContainsAsync(Expression<Func<T, bool>> predicate);
        T Find(params object[] keys);
        T Find(Expression<Func<T, bool>> predicate);
        Task<T> FindAsync(Expression<Func<T, bool>> predicate);

        T Add(T newObject);

        void DeleteAll();
        void Delete(T deleteObject);
        void MarkAsDeleted(T deleteObject, T? userId);
        void MarkAsDeleted(Expression<Func<T, bool>> predicate, T? userId);
        void MarkAsDeleted(I id, T? userId);
        void Update(T updateObject);
        List<T> Update(Expression<Func<T, bool>> predicate, Expression<Func<T,T>> updateFactory);
        
        int Count { get; }

        bool Any(Expression<Func<T, bool>> predicate);
        Task<bool> AnyAsync(Expression<Func<T, bool>> predicate);
        bool Any();
        Task<bool> AnyAsync();
        T GetById(I id);
        T SingleOrDefault(Expression<Func<T, bool>> predicate);
        Task<T> SingleOrDefaultAsync(Expression<Func<T, bool>> predicate);
        T FirstOrDefault();
        Task<T> FirstOrDefaultAsync();
        T FirstOrDefault(Expression<Func<T, bool>> predicate);
        Task<T> FirstOrDefaultAsync(Expression<Func<T,bool>> predicate);  
        T LastOrDefault<TKey>(Expression<Func<T, bool>> predicate, Expression<Func<T, TKey>> order);
        
        IQueryable<T> Local { get; }



    }
}
