package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Subscription;
import com.example.demo.repositories.SubscriptionRepository;

@Service
public class SubscriptionService {
	
	@Autowired
	SubscriptionRepository srepo;
	
	
	public Subscription save(Subscription s)
	{
		return srepo.save(s);
	}
	
	
	public Subscription getSub(int id)
	{
		return srepo.findById(id).get();
	}

	

}
