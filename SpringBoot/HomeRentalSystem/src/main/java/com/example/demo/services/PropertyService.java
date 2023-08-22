package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Facility;
import com.example.demo.entities.Property;
import com.example.demo.repositories.PropertyRepository;

@Service
public class PropertyService {
	
	@Autowired
	PropertyRepository prepo;
	
	public Property save(Property f)
	{
		return prepo.save(f);
	}
	public List<Property> getAll()
	{
		return prepo.findAll();
	}
}
