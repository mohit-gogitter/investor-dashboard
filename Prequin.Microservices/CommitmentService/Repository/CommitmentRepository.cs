using CommitmentService.Models;
using Microsoft.EntityFrameworkCore;

namespace CommitmentService.Repository
{
    public class CommitmentRepository : ICommitmentRepository
    {
        private readonly CommitmentDbContext _context;
        public CommitmentRepository(CommitmentDbContext commitmentDbContext)
        {
            _context = commitmentDbContext;
        }

        public async Task<IEnumerable<AssetClass>> GetAllAssetClasses()
        {
            return await _context.AssetClasses.ToListAsync();
        }

        async public Task<IEnumerable<Commitment>> GetAllCommitments()
        {
            return await _context.Commitments.ToListAsync();
        }

        async Task<IEnumerable<Commitment>> ICommitmentRepository.GetCommitmentsByInvestorAsync(int investorId)
        {
            var query = _context.Commitments
                                 .Where(c => c.InvestorId == investorId);

            return await query.Select(c => new Commitment
            {
                CommitmentId = c.CommitmentId,
                amount = c.amount,
                Currency = c.Currency,
                AssetClassId = c.AssetClassId,
                InvestorId = c.InvestorId
            }).ToListAsync();
        }
    }
}
