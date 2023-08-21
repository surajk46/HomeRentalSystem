package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;

@Service
public class RoleService {
	@Autowired
	RoleRepository rrepo;
	
	public List<Role> getAll()
	{
		return rrepo.findAll();
	}
	
	public Role getRole(int id)
	{
		return rrepo.findById(id).get();
	}

}
