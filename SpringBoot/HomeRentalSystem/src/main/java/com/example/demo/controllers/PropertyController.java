package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Property;
import com.example.demo.services.PropertyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PropertyController {
	
	@Autowired
	PropertyService pservice;
	
	@PostMapping("/saveproperty")
	public Property savFacility(@RequestBody Property f)
	{
		return pservice.save(f);
	}
	
	@GetMapping("/getallproperty")
	public List<Property> getAll()
	{
		return pservice.getAll();
	}

}
