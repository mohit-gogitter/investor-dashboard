using System.ComponentModel.DataAnnotations.Schema;

namespace CommitmentService.Models
{
    [Table("commitments", Schema ="public")]
    public class Commitment
    {
        [Column("pk_commitment_id")]
        public int CommitmentId { get; set; }
        [Column("amount")]
        public decimal amount { get; set; }
        [Column("currency")]
        public string? Currency { get; set; }
        [Column("fk_investor_id")]
        public int InvestorId { get; set; } 
        [Column("fk_asset_class_id")] 
        public int AssetClassId { get; set; }
    } 
}
