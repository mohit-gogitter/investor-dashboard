using InvestorService.Models;
using Microsoft.EntityFrameworkCore;

namespace InvestorService
{
    public class InvestorDbContext : DbContext
    {
        public InvestorDbContext(DbContextOptions<InvestorDbContext> options) : base(options)
        {
        }

        public DbSet<Investor> Investors { get; set; }
        public DbSet<InvestorType> InvestorTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
