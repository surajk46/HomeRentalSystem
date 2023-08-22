package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.PropertyTypeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PropertyTypeController {
	
	@Autowired
	PropertyTypeService ptservice;
	

}
