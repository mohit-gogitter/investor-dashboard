using InvestorService.Models;

namespace InvestorService.Repository
{
    public interface IInvestorRepository
    {
        Task<IEnumerable<Investor>> GetAllInvestors();
        Task<IEnumerable<InvestorType>> GetAllInvestorTypes();
    }
}
