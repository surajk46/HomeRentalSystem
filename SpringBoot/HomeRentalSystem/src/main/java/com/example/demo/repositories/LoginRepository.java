package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("Select l from Login l where email= :email and password= :password")
	public Optional<Login> getLogin(String email,String password);
	
	@Query("SELECT l FROM Login l WHERE l.email = ?1")
    Login findByEmail(String email);
}
