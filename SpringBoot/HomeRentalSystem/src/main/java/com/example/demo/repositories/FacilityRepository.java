package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Facility;

@Repository
public interface FacilityRepository extends JpaRepository<Facility, Integer> {

	@Query("SELECT f FROM Facility f JOIN f.properties p WHERE p.id = :propertyId")
    List<Facility> findFacilitiesByPropertyId(@Param("propertyId") int propertyId);
}
