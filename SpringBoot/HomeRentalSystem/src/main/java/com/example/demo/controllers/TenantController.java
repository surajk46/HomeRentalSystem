package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.Tenant;
import com.example.demo.entities.TenantReg;
import com.example.demo.services.AreaService;
import com.example.demo.services.CityService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.TenantService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TenantController 
{
	
	@Autowired
	TenantService tservice;
	@Autowired
	LoginService lservice;
	@Autowired
	RoleService rservice;
	@Autowired
	CityService cservice;
	@Autowired
	AreaService aservice;
	
	@PostMapping("/regtenant")
	public Tenant regTenant(@RequestBody TenantReg tr)
	{
		Role r =rservice.getRole(3);
		Login l=new Login(tr.getEmail(), tr.getPassword(), r, false);
		Login saved1=lservice.save(l);
		
		/*City c=new City(tr.getCity());
		City saved3=cservice.save(c);
		
		Area a=new Area(tr.getArea(), tr.getPincode(), saved3);
		Area saved4=aservice.save(a);*/
		
		Area area = aservice.getById(tr.getAreaid());
		
		Tenant t=new Tenant(tr.getFname(), tr.getLname(), 0, tr.getContact_no(),tr.getAddress(), area, l);
		Tenant saved2=tservice.save(t);
		return saved2;
	}

}
