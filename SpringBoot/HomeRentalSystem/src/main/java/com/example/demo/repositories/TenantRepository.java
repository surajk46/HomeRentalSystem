package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Owner;
import com.example.demo.entities.Tenant;

@Transactional
@Repository
public interface TenantRepository extends JpaRepository<Tenant, Integer> {
	
	@Query("SELECT t FROM Tenant t WHERE t.login_id.id = :id")
    public Tenant findTenantByLogin(int id);
	
	@Modifying
	@Query("delete from Tenant t where t.login_id.id = :id")
	public void deleteTenantByLoginId(int id);
	
	@Query("SELECT t FROM Tenant t WHERE t.id = :id")
    public Tenant getTenantById(int id);

}
