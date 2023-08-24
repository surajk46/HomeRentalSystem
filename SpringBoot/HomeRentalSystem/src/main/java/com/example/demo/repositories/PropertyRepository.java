package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Property;

@Transactional
@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {
	
	@Modifying
	@Query("update Property set image=:file where id=:id")
	public int uploadPhoto(int id,byte[] file);
}
