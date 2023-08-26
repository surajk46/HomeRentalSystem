package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.TenantOwnerInfo;
import com.example.demo.repositories.TenantOwnerInfoRepository;

@Service
public class TenantOwnerInfoService {
	
	@Autowired
	TenantOwnerInfoRepository toirepo;
	
	public TenantOwnerInfo save(TenantOwnerInfo l)
	{
		return toirepo.save(l);
	}
	
	public TenantOwnerInfo getTenantId(int id)
	{
	    return toirepo.getTenantId(id);
	}

}
