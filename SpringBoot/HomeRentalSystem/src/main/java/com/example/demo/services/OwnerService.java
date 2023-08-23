package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.Owner;
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
}
