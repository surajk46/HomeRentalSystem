using System;
using System.Collections.Generic;

namespace homerentalsystem.Models;

public partial class Facility
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<FacilityProperty> FacilityProperties { get; set; } = new List<FacilityProperty>();
}
