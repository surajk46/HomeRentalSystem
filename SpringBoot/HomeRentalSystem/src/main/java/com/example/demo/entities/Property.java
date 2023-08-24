package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "property")
public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@ManyToOne
	@JoinColumn(name = "owner_id")
	Owner owner_id;
	@OneToOne
	@JoinColumn(name = "area_id")
	Area area_id;
	@ManyToOne
	@JoinColumn(name = "property_type_id")
	PropertyType property_type_id;
	@Column
	String property_name;
	@Column
	String pdesc;
	@Column
	float price;
	@Column
	float deposit;
	byte [] image;
	@JsonIgnoreProperties("properties")
	@ManyToMany
	@JoinTable(name = "facility_property",
					   joinColumns = @JoinColumn(name="property_id"),
					   inverseJoinColumns = @JoinColumn(name="facility_id")
					   )
	Set<Facility> facilities;

	public Property() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Property(Owner owner_id, Area area_id, PropertyType property_type_id, String property_name, String pdesc,
			float price, float deposit, Set<Facility> facilities) {
		super();
		this.owner_id = owner_id;
		this.area_id = area_id;
		this.property_type_id = property_type_id;
		this.property_name = property_name;
		this.pdesc = pdesc;
		this.price = price;
		this.deposit = deposit;
		this.facilities = facilities;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Property(Owner owner_id, Area area_id, PropertyType property_type_id, String property_name, String pdesc,
			float price, float deposit, byte[] image, Set<Facility> facilities) {
		super();
		this.owner_id = owner_id;
		this.area_id = area_id;
		this.property_type_id = property_type_id;
		this.property_name = property_name;
		this.pdesc = pdesc;
		this.price = price;
		this.deposit = deposit;
		this.image = image;
		this.facilities = facilities;
	}

	public Property(Owner owner_id, Area area_id, PropertyType property_type_id, String property_name, String pdesc,
			float price, float deposit) {
		super();
		this.owner_id = owner_id;
		this.area_id = area_id;
		this.property_type_id = property_type_id;
		this.property_name = property_name;
		this.pdesc = pdesc;
		this.price = price;
		this.deposit = deposit;
	}

	public Property(int id, Owner owner_id, Area area_id, PropertyType property_type_id, String property_name,
			String pdesc, float price, float deposit, Set<Facility> facilities) {
		super();
		this.id = id;
		this.owner_id = owner_id;
		this.area_id = area_id;
		this.property_type_id = property_type_id;
		this.property_name = property_name;
		this.pdesc = pdesc;
		this.price = price;
		this.deposit = deposit;
		this.facilities = facilities;
	}
	

	public Property(Area area_id, PropertyType property_type_id, String property_name, String pdesc, float price,
			float deposit, Set<Facility> facilities) {
		super();
		this.area_id = area_id;
		this.property_type_id = property_type_id;
		this.property_name = property_name;
		this.pdesc = pdesc;
		this.price = price;
		this.deposit = deposit;
		this.facilities = facilities;
	}

	public Property(int id) {
		super();
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Owner getOwner_id() {
		return owner_id;
	}

	public void setOwner_id(Owner owner_id) {
		this.owner_id = owner_id;
	}

	public Area getArea_id() {
		return area_id;
	}

	public void setArea_id(Area area_id) {
		this.area_id = area_id;
	}

	public PropertyType getProperty_type_id() {
		return property_type_id;
	}

	public void setProperty_type_id(PropertyType property_type_id) {
		this.property_type_id = property_type_id;
	}

	public String getProperty_name() {
		return property_name;
	}

	public void setProperty_name(String property_name) {
		this.property_name = property_name;
	}

	public String getPdesc() {
		return pdesc;
	}

	public void setPdesc(String pdesc) {
		this.pdesc = pdesc;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getDeposit() {
		return deposit;
	}

	public void setDeposit(float deposit) {
		this.deposit = deposit;
	}

	public Set<Facility> getFacilities() {
		return facilities;
	}

	public void setFacilities(Set<Facility> facilities) {
		this.facilities = facilities;
	}
	
	

}
