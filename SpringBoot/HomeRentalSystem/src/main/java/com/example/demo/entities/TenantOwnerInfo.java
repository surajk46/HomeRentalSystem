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
	
	

}
