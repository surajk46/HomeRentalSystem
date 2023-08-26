using System;
using System.Collections.Generic;

namespace homerentalsystem.Models;

public partial class Tenant
{
    public int Id { get; set; }

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public int? AreaId { get; set; }

    public int? NoOfReqRem { get; set; }

    public int? LoginId { get; set; }

    public int? PaymentId { get; set; }

    public string Address { get; set; } = null!;

    public string ContactNo { get; set; } = null!;

    public virtual Area? Area { get; set; }

    public virtual Login? Login { get; set; }

    public virtual Payment? Payment { get; set; }
}
