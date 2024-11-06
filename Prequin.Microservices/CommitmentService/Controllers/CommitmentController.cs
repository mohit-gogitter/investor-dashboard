using CommitmentService.Models;
using CommitmentService.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CommitmentService.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class CommitmentController : ControllerBase
    {
        private readonly ICommitmentRepository _repository;
        public CommitmentController(ICommitmentRepository repository)
        {
            _repository = repository;
        }
        [HttpGet("commitments")]
        public async Task<IActionResult> GetCommitments()
        {
            try
            {
                var commitments = await _repository.GetAllCommitments();
                if (commitments == null || !commitments.Any())
                {
                    return NotFound(new { message = "No commitments found" });
                }
                return Ok(commitments);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while processing your request.", details = ex.Message });
            }
        }

        [HttpGet("assetclasses")]
        public async Task<IActionResult> GetAssetClasses()
        {
            try
            {
                var assetClasses = await _repository.GetAllAssetClasses();
                if (assetClasses == null || !assetClasses.Any())
                {
                    return NotFound(new { message = "No Asset Class found" });
                }
                return Ok(assetClasses);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while processing your request.", details = ex.Message });
            }
        }

        [HttpGet("commitments/{investorId}")]
        public async Task<IActionResult> GetCommitmentsByInvestor(int investorId)
        {
            try
            {
                var investorCommitments = await _repository.GetCommitmentsByInvestorAsync(investorId);

                if (investorCommitments == null || !investorCommitments.Any())
                {
                    return NotFound(new { message = $"No commitments found for investor ID {investorId}" });
                }
                return Ok(investorCommitments);
            }
            catch (Exception ex)
            {

                return StatusCode(500, new { message = "An error occurred while processing your request.", details = ex.Message });
            }
            
        }
    }
}
