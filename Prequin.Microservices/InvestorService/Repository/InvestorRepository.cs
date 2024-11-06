using InvestorService.Enums;
using InvestorService.Models;
using Microsoft.EntityFrameworkCore;

namespace InvestorService.Repository
{
    public class InvestorRepository : IInvestorRepository
    {
        private readonly InvestorDbContext _context;
        private readonly IHttpClientFactory _httpClientFactory;
        public InvestorRepository(InvestorDbContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClientFactory = httpClientFactory;
        }
        public async Task<IEnumerable<InvestorDto>> GetAllInvestors()
        {
            var investors = await _context.Investors.ToListAsync();

            List<InvestorDto> investorsDto = investors
                                            .DistinctBy(i => i.InvestorId)
                                            .Select(i => new InvestorDto
                                            {
                                                InvestorId = i.InvestorId,
                                                InvestorName = i.InvestorName,
                                                Address = i.Address,
                                                Country = i.Country,
                                                DateAdded = i.DateAdded,
                                                LastUpdated = i.LastUpdated,
                                                Type = GetStringValue(i.TypeId),
                                                TotalCommitment = 0
                                            })
                                            .OrderBy(i => i.InvestorId)
                                            .ToList();
            return investorsDto;
        }

        public async Task<IEnumerable<InvestorType>> GetAllInvestorTypes()
        {
            return await _context.InvestorTypes.ToListAsync();
        }

        public async Task<decimal> GetTotalCommitmentAmountForInvestor(int investorId)
        {
            var client = _httpClientFactory.CreateClient("CommitmentServiceClient");
            var response = await client.GetAsync($"api/Commitment/commitments/{investorId}");

            if (response.IsSuccessStatusCode)
            {
                var commitments = await response.Content.ReadFromJsonAsync<List<CommitmentDto>>();

                // Sum up the Amount field to get total commitment
                var totalCommitment = commitments?.Sum(c => c.Amount) ?? 0;

                return totalCommitment;
            }
            else
            {
                throw new Exception($"Failed to fetch commitments for investor {investorId}: {response.ReasonPhrase}");
            }
        }

        private string GetStringValue(int value) 
        {
            var strValue = (InvestorTypeEnum)value;
            return strValue.ToString();
        }
    }
}
