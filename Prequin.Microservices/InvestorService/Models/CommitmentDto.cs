
namespace InvestorService.Models
{
    public class CommitmentDto
    {
        public int CommitmentId { get; set; }
        public decimal Amount { get; set; }
        public string? Currency { get; set; }
        public int InvestorId { get; set; }
        public int AssetClassId { get; set; }
    }
}
