using InvestorService.Models;
using InvestorService.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InvestorService.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class InvestorController : ControllerBase
    {
        private readonly IInvestorRepository _repository;
        public InvestorController(IInvestorRepository repository) 
        {
            _repository = repository;
        } 

        [HttpGet("investors")]
        public async Task<IActionResult> GetInvestors()
        {
            try
            {
                var investors = await _repository.GetAllInvestors();

                if (investors == null || !investors.Any())
                { 
                    return NotFound(new { message = "No Investors Found!"});
                }
                return Ok(investors);

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while processing your request.", details = ex.Message });
            }
        }

        [HttpGet("investortypes")]
        public async Task<IActionResult> GetInvestorTypes()
        {
            try
            {
                var investorTypes = await _repository.GetAllInvestorTypes();

                if (investorTypes == null || !investorTypes.Any())
                {
                    return NotFound(new { message = "No Investor Types Found!" });
                }
                return Ok(investorTypes);

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while processing your request.", details = ex.Message });
            }
        }
    }
}
