package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Property;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {
	
	@Query("update Property set image=:file where id=:id")
	public int uploadPhoto(int id,byte[] file);
}
