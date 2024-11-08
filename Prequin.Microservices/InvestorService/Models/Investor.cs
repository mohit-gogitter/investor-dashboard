using System.ComponentModel.DataAnnotations.Schema;

namespace InvestorService.Models
{
    [Table("investors", Schema = "public")]
    public class Investor
    {
        [Column("investor_id")]
        public int InvestorId { get; set; }
        [Column("investor_name")]
        public string? InvestorName { get; set; }
        [Column("address")]
        public string? Address { get; set; }
        [Column("country")]
        public string? Country { get; set; }

        [Column("date_added")]
        public DateTime DateAdded { get; set; }

        [Column("last_updated")]
        public DateTime LastUpdated { get; set; }
        [Column("fk_type_id")]
        public int TypeId { get; set; }
    }
}
