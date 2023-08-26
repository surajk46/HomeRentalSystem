namespace homerentalsystem.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;
    using System.Threading.Tasks;
    using homerentalsystem.Models; // Adjust the namespace as needed

    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        

        private readonly HomerentalsystemContext _context;
        public PaymentController(HomerentalsystemContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymentDto>>> GetPayments()
        {
            var payments = await _context.PaymentDto
                .Include(p => p.LoginId)
                .Include(p => p.Subscription)
                .Select(p => new PaymentDto
                {
                    Id = p.Id,
                    Date = p.Date,
                    Amount = p.Amount,
                    Transaction = p.Transaction,
                    Transcation = p.Transcation,
                    LoginId = new Login
                    {
                        Id = p.LoginId.Id,
                        Email = p.LoginId.Email,
                        // Map other properties as needed
                    },
                    Subscription = new Subscription
                    {
                        Id = p.Subscription.Id,
                        NoOfRequests = p.Subscription.NoOfRequests,
                        // Map other properties as needed
                    }
                })
                .ToListAsync();

            return payments;
        }
    }

}
