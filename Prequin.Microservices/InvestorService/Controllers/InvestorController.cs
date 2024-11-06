using InvestorService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InvestorService.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class InvestorController : ControllerBase
    {
        private readonly InvestorDbContext _context;
        public InvestorController(InvestorDbContext investorDbContext)
        {
            _context = investorDbContext;
        }

        [HttpGet]
        public async Task<List<Investor>> GetInvestors()
        {
            return await _context.Investors.ToListAsync();
        }
    }
}
