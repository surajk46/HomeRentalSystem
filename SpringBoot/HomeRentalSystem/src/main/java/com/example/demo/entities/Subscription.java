package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "subscription")
public class Subscription {
	@Id
	int id;
	@Column
	int no_of_requests;
	@Column
	float amount;
	@Column
	int no_of_properties;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getNo_of_requests() {
		return no_of_requests;
	}
	public void setNo_of_requests(int no_of_requests) {
		this.no_of_requests = no_of_requests;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public int getNo_of_properties() {
		return no_of_properties;
	}
	public void setNo_of_properties(int no_of_properties) {
		this.no_of_properties = no_of_properties;
	}
	
	

}
