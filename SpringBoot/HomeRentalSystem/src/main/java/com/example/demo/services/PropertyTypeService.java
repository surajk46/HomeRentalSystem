package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.PropertyTypeRepository;

@Service
public class PropertyTypeService {
	
	@Autowired
	PropertyTypeRepository ptrepo;
	

}
