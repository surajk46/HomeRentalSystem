package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tenantownerinfo")
public class TenantOwnerInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column
	int owner_id;
	@Column
	int tenant_id;
	@Column
	int property_id;
	
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String email;
	@Column
	String contact_no;
	public TenantOwnerInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TenantOwnerInfo(int owner_id, int tenant_id, int property_id) {
		super();
		this.owner_id = owner_id;
		this.tenant_id = tenant_id;
		this.property_id = property_id;
	}
	
	public TenantOwnerInfo(int owner_id, int tenant_id, int property_id, String fname, String lname, String email,
			String contact_no) {
		super();
		this.owner_id = owner_id;
		this.tenant_id = tenant_id;
		this.property_id = property_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact_no = contact_no;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOwner_id() {
		return owner_id;
	}
	public void setOwner_id(int owner_id) {
		this.owner_id = owner_id;
	}
	public int getTenant_id() {
		return tenant_id;
	}
	public void setTenant_id(int tenant_id) {
		this.tenant_id = tenant_id;
	}
	public int getProperty_id() {
		return property_id;
	}
	public void setProperty_id(int property_id) {
		this.property_id = property_id;
	}
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

}
