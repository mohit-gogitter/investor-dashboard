using System.ComponentModel.DataAnnotations.Schema;

namespace InvestorService.Models
{
    [Table("investortypes", Schema = "public")]
    public class InvestorType
    {
        [Column("pk_type_id")]
        public int Id { get; set; }
        [Column("description")]
        public string? Description { get; set; }

    }
}
