package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.Owner;
import com.example.demo.entities.Tenant;
import com.example.demo.repositories.TenantRepository;

@Service
public class TenantService {
	
	@Autowired
	TenantRepository trepo;
	
	public Tenant save(Tenant l)
	{
		return trepo.save(l);
	}
	
	public Tenant findTenantByLogin(int id) {
        return trepo.findTenantByLogin(id);
    }
	
	public List<Tenant> getAll()
	{
		return trepo.findAll();
	}
	
	public void deleteTenantById(int id) 
	 {
	     trepo.deleteById(id);
	 }
	
	public void deleteTenantByLoginId(int id) 
	{
	     trepo.deleteTenantByLoginId(id);
	}

}
