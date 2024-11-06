using CommitmentService.Models;

namespace CommitmentService.Repository
{
    public interface ICommitmentRepository
    {
        Task<IEnumerable<Commitment>> GetCommitmentsByInvestorAsync(int investorId);

        Task<IEnumerable<Commitment>> GetAllCommitments();

        Task<IEnumerable<AssetClass>> GetAllAssetClasses();
    }
}
