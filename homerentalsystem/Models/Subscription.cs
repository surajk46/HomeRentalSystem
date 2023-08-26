using System;
using System.Collections.Generic;

namespace homerentalsystem.Models;

public partial class Subscription
{
    public int Id { get; set; }

    public int NoOfRequests { get; set; }

    public decimal Amount { get; set; }

    public int NoOfProperties { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
}
