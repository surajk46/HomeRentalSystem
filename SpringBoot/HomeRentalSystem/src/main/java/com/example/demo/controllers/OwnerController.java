package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Login;
import com.example.demo.entities.Owner;
import com.example.demo.entities.OwnerReg;
import com.example.demo.entities.Role;
import com.example.demo.services.AreaService;
import com.example.demo.services.CityService;
import com.example.demo.services.LoginService;
import com.example.demo.services.OwnerService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OwnerController {
	
	@Autowired
	OwnerService oservice;
	@Autowired
	LoginService lservice;
	@Autowired
	RoleService rservice;
	@Autowired
	CityService cservice;
	@Autowired
	AreaService aservice;
	
	@PostMapping("/regowner")
	public Owner regOwner(@RequestBody OwnerReg or)
	{
		Role r =rservice.getRole(2);
		Login l=new Login(or.getEmail(), or.getPassword(), r, false);
		Login saved1=lservice.save(l);
		
		Area area = aservice.getById(or.getAreaid());
		
		Owner o=new Owner(or.getFname(), or.getLname(), 0, or.getContact_no(),or.getAddress(), area, l);
		Owner saved2=oservice.save(o);
		return saved2;
	}
	
	 @GetMapping("/contactNo/{ownerId}")
	 public ResponseEntity<String> getContactNoByOwnerId(@PathVariable int ownerId) 
	 {
	    String contactNo = oservice.getContactNoByOwnerId(ownerId);
	    return ResponseEntity.ok(contactNo);
	 }

}
