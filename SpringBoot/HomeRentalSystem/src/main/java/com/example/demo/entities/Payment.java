package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column
	Date date;
	@Column
	float amount;
	@Column
	String transcation;
	
	@ManyToOne
	@JoinColumn(name = "login_id")
	Login login_id;
	
	@ManyToOne
	@JoinColumn(name = "subscription_id")
	Subscription subscription_id;
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Payment(Date date, float amount, String transcation, Login login_id, Subscription subscription_id) {
		super();
		this.date = date;
		this.amount = amount;
		this.transcation = transcation;
		this.login_id = login_id;
		this.subscription_id = subscription_id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public String getTranscation() {
		return transcation;
	}
	public void setTranscation(String transcation) {
		this.transcation = transcation;
	}
	public Login getLogin_id() {
		return login_id;
	}
	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
	public Subscription getSubscription_id() {
		return subscription_id;
	}
	public void setSubscription_id(Subscription subscription_id) {
		this.subscription_id = subscription_id;
	}
	
	

}
