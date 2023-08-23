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
	
	public Property save(Property p)
	{
		return prepo.save(p);
	}
	public List<Property> getAll()
	{
		return prepo.findAll();
	}
	
	public boolean upload(int id,byte[] photo)
	{
		if(prepo.uploadPhoto(id, photo)==1)
			return true;
		else {
			return false;
		}
	}
}
