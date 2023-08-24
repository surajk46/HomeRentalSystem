package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Owner;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Integer> 
{
	
	@Query("SELECT o.contact_no FROM Owner o WHERE o.id = :ownerId")
    String findContactNoByOwnerId(@Param("ownerId") int ownerId);
	
}
