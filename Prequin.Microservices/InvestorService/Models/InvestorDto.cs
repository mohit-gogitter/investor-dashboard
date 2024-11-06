using System.ComponentModel.DataAnnotations.Schema;

namespace InvestorService.Models
{
    public class InvestorDto
    {
        public int InvestorId { get; set; }
        public string? InvestorName { get; set; }
        public string? Address { get; set; }
        public string? Country { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime LastUpdated { get; set; }
        public string? Type { get; set; }
        public decimal TotalCommitment { get; set; }
    }
}
