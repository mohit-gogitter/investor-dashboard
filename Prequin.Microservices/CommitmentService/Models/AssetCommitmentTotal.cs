namespace CommitmentService.Models
{
    public class AssetCommitmentTotal
    {
        public int AssetClassId { get; set; }
        public string? AssetClass { get; set; }
        public decimal Total { get; set; }
    }
}
