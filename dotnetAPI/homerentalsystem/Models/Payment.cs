using System;
using System.Collections.Generic;

namespace homerentalsystem.Models;

public partial class Payment
{
    public int Id { get; set; }

    public int? LoginId { get; set; }

    public int? SubscriptionId { get; set; }

    public DateOnly? Date { get; set; }

    public decimal? Amount { get; set; }

    public string? Transaction { get; set; }

    public string? Transcation { get; set; }

    public virtual Login? Login { get; set; }

    public virtual ICollection<Owner> Owners { get; set; } = new List<Owner>();

    public virtual Subscription? Subscription { get; set; }

    public virtual ICollection<Tenant> Tenants { get; set; } = new List<Tenant>();
}
