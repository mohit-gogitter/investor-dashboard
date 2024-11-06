using CommitmentService.Models;
using Microsoft.EntityFrameworkCore;

namespace CommitmentService
{
    public class CommitmentDbContext : DbContext
    {
        public CommitmentDbContext(DbContextOptions<CommitmentDbContext> options) : base(options)
        {

        }
        public DbSet<Commitment> Commitments { get; set; }

        public DbSet<AssetClass> AssetClasses { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
