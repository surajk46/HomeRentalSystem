using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using homerentalsystem.Models;

namespace homerentalsystem.Models;

public partial class HomerentalsystemContext : DbContext
{
    public HomerentalsystemContext()
    {
    }

    public HomerentalsystemContext(DbContextOptions<HomerentalsystemContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Area> Areas { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Facility> Facilities { get; set; }

    public virtual DbSet<FacilityProperty> FacilityProperties { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Owner> Owners { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Property> Properties { get; set; }

    public virtual DbSet<PropertyType> PropertyTypes { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Subscription> Subscriptions { get; set; }

    public virtual DbSet<Tenant> Tenants { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=homerentalsystem", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.33-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Area>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("area");

            entity.HasIndex(e => e.CityId, "area_fk_city_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Pincode)
                .HasMaxLength(10)
                .HasColumnName("pincode");

            entity.HasOne(d => d.City).WithMany(p => p.Areas)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("area_fk_city_id");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("city");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Facility>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("facility");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<FacilityProperty>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("facility_property");

            entity.HasIndex(e => e.FacilityId, "facility_property_fk_facility_id");

            entity.HasIndex(e => e.PropertyId, "facility_property_fk_property_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.FacilityId).HasColumnName("facility_id");
            entity.Property(e => e.Mdesc)
                .HasMaxLength(255)
                .HasColumnName("mdesc");
            entity.Property(e => e.PropertyId).HasColumnName("property_id");

            entity.HasOne(d => d.Facility).WithMany(p => p.FacilityProperties)
                .HasForeignKey(d => d.FacilityId)
                .HasConstraintName("facility_property_fk_facility_id");

            entity.HasOne(d => d.Property).WithMany(p => p.FacilityProperties)
                .HasForeignKey(d => d.PropertyId)
                .HasConstraintName("facility_property_fk_property_id");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.RoleId, "login_fk_role_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Status).HasColumnName("status");

            entity.HasOne(d => d.Role).WithMany(p => p.Logins)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("login_fk_role_id");
        });

        modelBuilder.Entity<Owner>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("owners");

            entity.HasIndex(e => e.AreaId, "owners_fk_area_id");

            entity.HasIndex(e => e.LoginId, "owners_fk_login_id");

            entity.HasIndex(e => e.PaymentId, "owners_fk_payment_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AddPropertyRequestRem).HasColumnName("add_property_request_rem");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(20)
                .HasColumnName("contact_no");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.PaymentId).HasColumnName("payment_id");

            entity.HasOne(d => d.Area).WithMany(p => p.Owners)
                .HasForeignKey(d => d.AreaId)
                .HasConstraintName("owners_fk_area_id");

            entity.HasOne(d => d.Login).WithMany(p => p.Owners)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("owners_fk_login_id");

            entity.HasOne(d => d.Payment).WithMany(p => p.Owners)
                .HasForeignKey(d => d.PaymentId)
                .HasConstraintName("owners_fk_payment_id");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("payment");

            entity.HasIndex(e => e.LoginId, "payment_fk_login_id");

            entity.HasIndex(e => e.SubscriptionId, "payment_fk_subscription_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Amount)
                .HasPrecision(10, 2)
                .HasColumnName("amount");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.SubscriptionId).HasColumnName("subscription_id");
            entity.Property(e => e.Transaction)
                .HasMaxLength(255)
                .HasColumnName("transaction");
            entity.Property(e => e.Transcation)
                .HasMaxLength(255)
                .HasColumnName("transcation");

            entity.HasOne(d => d.Login).WithMany(p => p.Payments)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("payment_fk_login_id");

            entity.HasOne(d => d.Subscription).WithMany(p => p.Payments)
                .HasForeignKey(d => d.SubscriptionId)
                .HasConstraintName("payment_fk_subscription_id");
        });

        modelBuilder.Entity<Property>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("property");

            entity.HasIndex(e => e.AreaId, "property_fk_area_id");

            entity.HasIndex(e => e.OwnerId, "property_fk_owner_id");

            entity.HasIndex(e => e.PropertyTypeId, "property_fk_property_type_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.Deposit)
                .HasPrecision(10, 2)
                .HasColumnName("deposit");
            entity.Property(e => e.Image).HasColumnName("image");
            entity.Property(e => e.OwnerId).HasColumnName("owner_id");
            entity.Property(e => e.Pdesc)
                .HasColumnType("text")
                .HasColumnName("pdesc");
            entity.Property(e => e.Price)
                .HasPrecision(10, 2)
                .HasColumnName("price");
            entity.Property(e => e.PropertyName)
                .HasMaxLength(255)
                .HasColumnName("property_name");
            entity.Property(e => e.PropertyTypeId).HasColumnName("property_type_id");

            entity.HasOne(d => d.Area).WithMany(p => p.Properties)
                .HasForeignKey(d => d.AreaId)
                .HasConstraintName("property_fk_area_id");

            entity.HasOne(d => d.Owner).WithMany(p => p.Properties)
                .HasForeignKey(d => d.OwnerId)
                .HasConstraintName("property_fk_owner_id");

            entity.HasOne(d => d.PropertyType).WithMany(p => p.Properties)
                .HasForeignKey(d => d.PropertyTypeId)
                .HasConstraintName("property_fk_property_type_id");
        });

        modelBuilder.Entity<PropertyType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("property_type");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Subscription>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("subscription");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Amount)
                .HasPrecision(10, 2)
                .HasColumnName("amount");
            entity.Property(e => e.NoOfProperties).HasColumnName("no_of_properties");
            entity.Property(e => e.NoOfRequests).HasColumnName("no_of_requests");
        });

        modelBuilder.Entity<Tenant>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("tenants");

            entity.HasIndex(e => e.AreaId, "tenants_fk_area_id");

            entity.HasIndex(e => e.LoginId, "tenants_fk_login_id");

            entity.HasIndex(e => e.PaymentId, "tenants_fk_payment_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.AreaId).HasColumnName("area_id");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(20)
                .HasColumnName("contact_no");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.NoOfReqRem).HasColumnName("no_of_req_rem");
            entity.Property(e => e.PaymentId).HasColumnName("payment_id");

            entity.HasOne(d => d.Area).WithMany(p => p.Tenants)
                .HasForeignKey(d => d.AreaId)
                .HasConstraintName("tenants_fk_area_id");

            entity.HasOne(d => d.Login).WithMany(p => p.Tenants)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("tenants_fk_login_id");

            entity.HasOne(d => d.Payment).WithMany(p => p.Tenants)
                .HasForeignKey(d => d.PaymentId)
                .HasConstraintName("tenants_fk_payment_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    public DbSet<homerentalsystem.Models.PaymentDto>? PaymentDto { get; set; }
}
