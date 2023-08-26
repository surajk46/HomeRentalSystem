namespace homerentalsystem.Models
{
    public class PaymentDto
    {
        public int Id { get; set; }
        public DateTime? Date { get; set; }
        public decimal? Amount { get; set; }
        public string Transaction { get; set; }
        public string Transcation { get; set; }
        public Login LoginId { get; set; }
        public Subscription Subscription { get; set; }
    }

}
