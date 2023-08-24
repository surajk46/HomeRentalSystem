package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;
import com.example.demo.entities.Facility;
import com.example.demo.repositories.FacilityRepository;

@Service
public class FacilityService 
{
	@Autowired
	FacilityRepository frepo;
	
	public Facility save(Facility f)
	{
		return frepo.save(f);
	}
	public List<Facility> getAll()
	{
		return frepo.findAll();
	}
	public Facility getById(int id)
	{
		return frepo.findById(id).get();
	}
	
}
