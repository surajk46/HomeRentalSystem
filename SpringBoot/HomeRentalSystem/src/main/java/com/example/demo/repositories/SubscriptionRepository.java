package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Subscription;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Integer> {
	
	@Query("select s from Subscription s where s.id=:id")
	public Subscription getSubById(int id) ;

}
