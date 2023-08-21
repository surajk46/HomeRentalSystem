package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Tenant;
import com.example.demo.repositories.TenantRepository;

@Service
public class TenantService {
	
	@Autowired
	TenantRepository trepo;
	
	public Tenant save(Tenant l)
	{
		return trepo.save(l);
	}
	

}
