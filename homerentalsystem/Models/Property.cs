using System;
using System.Collections.Generic;

namespace homerentalsystem.Models;

public partial class Property
{
    public int Id { get; set; }

    public int? OwnerId { get; set; }

    public int? AreaId { get; set; }

    public int? PropertyTypeId { get; set; }

    public string? PropertyName { get; set; }

    public string? Pdesc { get; set; }

    public decimal? Price { get; set; }

    public decimal? Deposit { get; set; }

    public byte[]? Image { get; set; }

    public virtual Area? Area { get; set; }

    public virtual ICollection<FacilityProperty> FacilityProperties { get; set; } = new List<FacilityProperty>();

    public virtual Owner? Owner { get; set; }

    public virtual PropertyType? PropertyType { get; set; }
}
