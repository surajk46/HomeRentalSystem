using System;
using System.Collections.Generic;

namespace homerentalsystem.Models;

public partial class Role
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
