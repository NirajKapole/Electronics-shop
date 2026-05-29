using Microsoft.EntityFrameworkCore;
using ElectricalSupplies.API.Models;

namespace ElectricalSupplies.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products => Set<Product>();
    }
}