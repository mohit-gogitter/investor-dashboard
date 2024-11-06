using InvestorService.Models;
using Microsoft.EntityFrameworkCore;

namespace InvestorService.Repository
{
    public class InvestorRepository : IInvestorRepository
    {
        private readonly InvestorDbContext _context;
        public InvestorRepository(InvestorDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Investor>> GetAllInvestors()
        {
            return await _context.Investors.ToListAsync();
        }

        public async Task<IEnumerable<InvestorType>> GetAllInvestorTypes()
        {
            return await _context.InvestorTypes.ToListAsync();
        }
    }
}
