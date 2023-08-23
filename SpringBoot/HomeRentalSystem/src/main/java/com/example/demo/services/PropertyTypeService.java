package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.Property;
import com.example.demo.entities.PropertyType;
import com.example.demo.repositories.PropertyTypeRepository;

@Service
public class PropertyTypeService {
	
	@Autowired
	PropertyTypeRepository ptrepo;
	
	public PropertyType save(PropertyType l)
	{
		return ptrepo.save(l);
	}
	
	public PropertyType getById(int id)
	{
		return ptrepo.findById(id).get();
	}
	
	public List<PropertyType> getAll()
	{
		return ptrepo.findAll();
	}
	
	/*public List<PropertyType> getareabycity(int id)
	{
		return arepo.getareabyid(id);
	}*/

}
