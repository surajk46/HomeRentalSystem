using System;
using System.Collections.Generic;

namespace homerentalsystem.Models;

public partial class City
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Area> Areas { get; set; } = new List<Area>();
}
