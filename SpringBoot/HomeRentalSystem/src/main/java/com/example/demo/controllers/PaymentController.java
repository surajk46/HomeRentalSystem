package com.example.demo.controllers;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Login;
import com.example.demo.entities.Owner;
import com.example.demo.entities.Payment;
import com.example.demo.entities.PaymentReg;
import com.example.demo.entities.Role;
import com.example.demo.entities.Subscription;
import com.example.demo.entities.Tenant;
import com.example.demo.entities.TenantReg;
import com.example.demo.services.LoginService;
import com.example.demo.services.OwnerService;
import com.example.demo.services.PaymentService;
import com.example.demo.services.SubscriptionService;

@RestController
public class PaymentController {
	
	@Autowired
	PaymentService pservice;
	@Autowired
	LoginService lservice;
	@Autowired
	SubscriptionService sservice;
	@Autowired
	OwnerService oservice;
	 @GetMapping("/updateloginstatus")
	 public ResponseEntity<String> updateLoginStatusBasedOnPayments() 
	 {
	     pservice.updateLoginStatusBasedOnPayments();
	     return ResponseEntity.ok("Login statuses updated based on payment subscription.");
	 }
	 
	    @PostMapping("/regpayment")
		public Payment regPayment(@RequestBody PaymentReg pr)
		{
			
			Login l=lservice.getLogin(pr.getLogin_id());
			Subscription subscription=sservice.getSub(pr.getSubscription_id());
			
			
			Payment payment=new Payment(new Date(0), pr.getAmount(), null, l, subscription);
			Payment saved=pservice.save(payment);
			//Owner o=pay
			
			
			return saved;
		}
	

}
