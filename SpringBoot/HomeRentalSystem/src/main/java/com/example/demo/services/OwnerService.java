package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.Login;
import com.example.demo.entities.Owner;
import com.example.demo.entities.Tenant;
import com.example.demo.repositories.OwnerRepository;


@Service
public class OwnerService 
{
	@Autowired
	OwnerRepository orepo;
	
	public Owner save(Owner l)
	{
		return orepo.save(l);
	}
	
	public Owner getById(int id)
	{
		return orepo.findById(id).get();
	}
	
	public String getContactNoByOwnerId(int ownerId) {
        return orepo.findContactNoByOwnerId(ownerId);
    }
	
	public Owner findOwnerByLogin(int id) 
	{
        return orepo.findByLogin(id);
    }
	
	public List<Owner> getAll()
	{
		return orepo.findAll();
	}
	
	public void deleteOwnerById(int id) 
	 {
	        orepo.deleteById(id);
	 }
	
	public void deleteOwnerByLoginId(int id) 
	{
	     orepo.deleteOwnerByLoginId(id);
	}
}
