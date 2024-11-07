using CommitmentService.Enums;
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

        async Task<CommitmentDto> ICommitmentRepository.GetCommitmentsByInvestorAsync(int investorId)
        {
            var query = _context.Commitments
                                 .Where(c => c.InvestorId == investorId);

            var commitments = await query.Select(c => new Commitment
            {
                CommitmentId = c.CommitmentId,
                Amount = c.Amount,
                Currency = c.Currency,
                AssetClassId = c.AssetClassId,
                InvestorId = c.InvestorId
            }).ToListAsync();

            List<InvestorCommitment> investorCommitments = commitments.Select(c => new InvestorCommitment
            {
                CommitmentId = c.CommitmentId,
                Amount = c.Amount,
                AssetClassId = c.AssetClassId,
                AssetClass = GetStringValue(c.AssetClassId),
                Currency = c.Currency,
                InvestorId = c.InvestorId
            }).OrderByDescending(c => c.Amount)
              .ToList();

            CommitmentDto commitmentDto = new CommitmentDto();

            commitmentDto.InvestorCommitments = investorCommitments;
            commitmentDto.AssetCommitmentTotals =
            [
                new AssetCommitmentTotal
                {
                    AssetClass = "All",
                    AssetClassId = 0,
                    Total = 0
                },
            ];

            foreach (int assetClassid in Enum.GetValues<AssetClassEnum>())
            {
                commitmentDto.AssetCommitmentTotals.Add(new AssetCommitmentTotal
                {
                    AssetClassId = assetClassid,
                    AssetClass = GetStringValue(assetClassid),
                    Total = investorCommitments.Where(ic => ic.AssetClassId == assetClassid).Sum(ic => ic.Amount)
                });
            }
            commitmentDto.AssetCommitmentTotals.Where(c => c.AssetClassId == 0).First().Total = commitmentDto.AssetCommitmentTotals.Sum(c => c.Total);

            return commitmentDto;
        }

        private string GetStringValue(int value)
        {
            var strValue = (AssetClassEnum)value;
            return strValue.ToString();
        }
    }
}
