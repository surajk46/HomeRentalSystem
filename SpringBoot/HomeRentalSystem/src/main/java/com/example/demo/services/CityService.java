package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;
import com.example.demo.repositories.CityRepository;

@Service
public class CityService 
{
	
	@Autowired
	CityRepository crepo;
	
	public City save(City l)
	{
		return crepo.save(l);
	}

}
