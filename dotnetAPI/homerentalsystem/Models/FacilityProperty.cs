using System;
using System.Collections.Generic;

namespace homerentalsystem.Models;

public partial class FacilityProperty
{
    public int Id { get; set; }

    public int? PropertyId { get; set; }

    public int? FacilityId { get; set; }

    public string? Mdesc { get; set; }

    public virtual Facility? Facility { get; set; }

    public virtual Property? Property { get; set; }
}
