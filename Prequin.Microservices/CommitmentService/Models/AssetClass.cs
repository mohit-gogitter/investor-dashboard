using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CommitmentService.Models
{
    [Table("assetclasses", Schema ="public")]
    public class AssetClass
    {
        [Key]
        [Column("pk_asset_class_id")]
        public int AssetClassId { get; set; }
        [Column("name")]
        public string? Name { get; set; }
    }
}
