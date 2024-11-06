using CommitmentService.Models;

namespace CommitmentService.Repository
{
    public interface ICommitmentRepository
    {
        Task<CommitmentDto> GetCommitmentsByInvestorAsync(int investorId);

        Task<IEnumerable<Commitment>> GetAllCommitments();

        Task<IEnumerable<AssetClass>> GetAllAssetClasses();
    }
}
