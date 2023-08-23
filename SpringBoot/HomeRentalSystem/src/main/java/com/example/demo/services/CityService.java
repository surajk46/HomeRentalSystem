package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;
import com.example.demo.entities.Role;
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
	
	public City getRole(int id)
	{
		return crepo.findById(id).get();
	}
	
	public List<City> getAll()
	{
		return crepo.findAll();
	}
	
	

}
