package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="loggin")
public class Login 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String email;
	String password;
	@ManyToOne
	@JoinColumn(name = "role_id")
	Role role_id;
	boolean status;
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(String email, String password, Role role_id, boolean status) {
		super();
		this.email = email;
		this.password = password;
		this.role_id = role_id;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Role getRole_id() {
		return role_id;
	}
	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
	
}
