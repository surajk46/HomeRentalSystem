package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TenantOwnerInfo;

@Repository
public interface TenantOwnerInfoRepository extends JpaRepository<TenantOwnerInfo, Integer> {
	
	@Query("select t.tenant_id from TenantOwnerInfo t where t.owner_id=:id")
	public TenantOwnerInfo getTenantId(int id);

}
