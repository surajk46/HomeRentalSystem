package com.example.demo.controllers;

import java.util.List;

import org.apache.tomcat.util.net.jsse.PEMFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Property;
import com.example.demo.entities.PropertyReg;
import com.example.demo.entities.PropertyType;
import com.example.demo.services.AreaService;
import com.example.demo.services.OwnerService;
import com.example.demo.services.PropertyService;
import com.example.demo.services.PropertyTypeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PropertyController {
	
	@Autowired
	PropertyService pservice;
	@Autowired
	AreaService aservice;
	@Autowired
	OwnerService oservice;
	@Autowired
	PropertyTypeService ptservice;
	
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
	
	@PostMapping("/regproperty")
	public Property regProperty(@RequestBody PropertyReg pr)
	{
		Area area = aservice.getById(pr.getArea_id());
		PropertyType pt=ptservice.getById(pr.getProperty_type_id());
		
		Property p=new Property( area, pt, pr.getProperty_name(), pr.getPdesc(), pr.getPrice(), pr.getDeposit(), pr.getFacilities());
		Property saved=pservice.save(p);
		return saved;
		
		/*Tenant t=new Tenant(tr.getFname(), tr.getLname(), 0, tr.getContact_no(),tr.getAddress(), area, l);
		Tenant saved2=tservice.save(t);
		return saved2;*/
	}

}
