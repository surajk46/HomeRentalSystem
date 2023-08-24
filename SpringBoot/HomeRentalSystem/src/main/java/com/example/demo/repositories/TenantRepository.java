package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Owner;
import com.example.demo.entities.Tenant;

@Repository
public interface TenantRepository extends JpaRepository<Tenant, Integer> {
	
	@Query("SELECT t FROM Tenant t WHERE t.login_id.id = :id")
    public Tenant findTenantByLogin(int id);

}
