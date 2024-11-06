using System.ComponentModel.DataAnnotations.Schema;

namespace CommitmentService.Models
{
    public class CommitmentDto
    {
        public List<InvestorCommitment>? InvestorCommitments { get; set; }
        public List<AssetCommitmentTotal>? AssetCommitmentTotals { get; set; }
    }
}
