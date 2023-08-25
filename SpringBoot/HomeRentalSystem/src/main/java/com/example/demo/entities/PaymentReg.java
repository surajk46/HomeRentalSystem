package com.example.demo.entities;

public class PaymentReg {
	
	int no_of_requests,no_of_properties;
	float amount;
	int login_id,subscription_id;
	public int getNo_of_requests() {
		return no_of_requests;
	}
	public void setNo_of_requests(int no_of_requests) {
		this.no_of_requests = no_of_requests;
	}
	public int getNo_of_properties() {
		return no_of_properties;
	}
	public void setNo_of_properties(int no_of_properties) {
		this.no_of_properties = no_of_properties;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public int getLogin_id() {
		return login_id;
	}
	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}
	public int getSubscription_id() {
		return subscription_id;
	}
	public void setSubscription_id(int subscription_id) {
		this.subscription_id = subscription_id;
	}
	 

}
