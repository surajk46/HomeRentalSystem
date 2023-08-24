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
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "facility")
public class Facility {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column
	String name;
	
	@JsonIgnoreProperties("facilities")
	@ManyToMany
	@JoinTable(name = "facility_property",
					   joinColumns = @JoinColumn(name="facility_id"),
					   inverseJoinColumns = @JoinColumn(name="property_id")
					   )
	Set<Property> properties;

	public Facility() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Facility(int id, String name, Set<Property> properties) {
		super();
		this.id = id;
		this.name = name;
		//this.properties = properties;
	}

	public Facility(String name) {
		super();
		this.name = name;
	}

	public Facility(int id) {
		super();
		this.id = id;
	}

	public Facility(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Property> getProperties() {
		return properties;
	}

	public void setProperties(Set<Property> properties) {
		this.properties = properties;
	}
	
	

}
