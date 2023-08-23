package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Facility;
import com.example.demo.services.FacilityService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FacilityController {
	@Autowired
	FacilityService fservice;
	
	@PostMapping("/savefacility")
	public Facility savFacility(@RequestBody Facility f)
	{
		return fservice.save(f);
	}
	
	@GetMapping("/getallfacility")
	public List<Facility> getAll()
	{
		return fservice.getAll();
	}

}
