package com.example.demo.controllers;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.example.demo.services.TenantService;

@CrossOrigin(origins = "http://localhost:3000")
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
	@Autowired
	TenantService tservice;
	 @GetMapping("/updateloginstatus")
	 public ResponseEntity<String> updateLoginStatusBasedOnPayments() 
	 {
	     pservice.updateLoginStatusBasedOnPayments();
	     return ResponseEntity.ok("Login statuses updated based on payment subscription.");
	 }
	 
	    @PostMapping("/regpayment")
		public Payment regPayment(@RequestBody PaymentReg pr)
		{
			
			Login l=lservice.getLoginByEmail(pr.getEmail());
			Subscription subscription=sservice.getSub(pr.getSubscription_id());
			l.setStatus(true);
			
			LocalDate curdate=LocalDate.now();
			String dateString=curdate.toString();
			Payment payment=new Payment(dateString, pr.getAmount(), null, l, subscription);
			Payment saved=pservice.save(payment);
		//	Owner owner=oservice.getById(0) payment.getId();
			if(l.getRole_id().getId()==2)
			{
				Owner owner=oservice.findOwnerByLogin(l.getId());
				owner.setPayment_id(saved);
				owner.setAdd_property_request_rem(pr.getNo_of_properties());
				oservice.save(owner);
			}
			else if(l.getRole_id().getId()==3)
			{
				Tenant tenant=tservice.findTenantByLogin(l.getId());
				tenant.setPayment_id(saved);
				tenant.setNo_of_req_rem(pr.getNo_of_requests());
				tservice.save(tenant);
			}
			
			return saved;
		}
	

}
