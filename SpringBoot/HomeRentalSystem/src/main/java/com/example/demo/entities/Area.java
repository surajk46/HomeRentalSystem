package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "area")
public class Area {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column
	String name;
	@Column
	String pincode;
	@ManyToOne
	@JoinColumn(name = "city_id")
	City city_id;
	public Area() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Area(String name, String pincode, City city_id) {
		super();
		this.name = name;
		this.pincode = pincode;
		this.city_id = city_id;
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
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public City getCity_id() {
		return city_id;
	}
	public void setCity_id(City city_id) {
		this.city_id = city_id;
	}
	
	
	

}
