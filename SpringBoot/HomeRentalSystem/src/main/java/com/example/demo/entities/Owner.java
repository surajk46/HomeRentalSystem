package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "owners")
public class Owner {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column
	String fname,lname;
	@Column
	int add_property_request_rem;
	@Column
	String contact_no;
	@Column
	String address;
	
	@ManyToOne
	@JoinColumn(name = "area_id")
	Area area_id;
	
	@OneToOne
	@JoinColumn(name = "login_id")
	Login login_id;
	
	@OneToOne
	@JoinColumn(name = "payment_id")
	Payment payment_id;

	public Owner() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Owner(int id) {
		super();
		this.id = id;
	}

	public Owner(String fname, String lname, int add_property_request_rem, String contact_no, String address,
			Area area_id, Login login_id, Payment payment_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.add_property_request_rem = add_property_request_rem;
		this.contact_no = contact_no;
		this.address = address;
		this.area_id = area_id;
		this.login_id = login_id;
		this.payment_id = payment_id;
	}

	public Owner(String fname, String lname, int add_property_request_rem, String contact_no, String address,
			Area area_id, Login login_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.add_property_request_rem = add_property_request_rem;
		this.contact_no = contact_no;
		this.address = address;
		this.area_id = area_id;
		this.login_id = login_id;
	}
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public int getAdd_property_request_rem() {
		return add_property_request_rem;
	}

	public void setAdd_property_request_rem(int add_property_request_rem) {
		this.add_property_request_rem = add_property_request_rem;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Area getArea_id() {
		return area_id;
	}

	public void setArea_id(Area area_id) {
		this.area_id = area_id;
	}

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}

	public Payment getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(Payment payment_id) {
		this.payment_id = payment_id;
	}

	
	
	


}
