package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Role;
import com.example.demo.entities.Subscription;
import com.example.demo.services.RoleService;
import com.example.demo.services.SubscriptionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SubscriptionController {
	
	@Autowired
	SubscriptionService sservice;
	
	@GetMapping("/getallsubscriptions")
	public List<Subscription> getAll()
	{
		return sservice.getAll();
	}

}
