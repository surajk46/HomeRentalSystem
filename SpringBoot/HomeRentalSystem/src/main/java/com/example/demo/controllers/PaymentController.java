package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.PaymentService;

@RestController
public class PaymentController {
	
	@Autowired
	PaymentService pservice;
	
	 @GetMapping("/updateloginstatus")
	 public ResponseEntity<String> updateLoginStatusBasedOnPayments() 
	 {
	     pservice.updateLoginStatusBasedOnPayments();
	     return ResponseEntity.ok("Login statuses updated based on payment subscription.");
	 }
	

}
