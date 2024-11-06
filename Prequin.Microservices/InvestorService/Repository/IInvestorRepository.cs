using InvestorService.Models;

namespace InvestorService.Repository
{
    public interface IInvestorRepository
    {
        Task<IEnumerable<InvestorDto>> GetAllInvestors();
        Task<IEnumerable<InvestorType>> GetAllInvestorTypes();
        Task<decimal> GetTotalCommitmentAmountForInvestor(int investorId);
    }
}
