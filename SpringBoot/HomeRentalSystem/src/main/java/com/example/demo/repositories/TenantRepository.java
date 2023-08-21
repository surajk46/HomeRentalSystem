package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Tenant;

@Repository
public interface TenantRepository extends JpaRepository<Tenant, Integer> {

}
