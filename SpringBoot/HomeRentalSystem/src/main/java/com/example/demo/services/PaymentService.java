package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.PaymentRepository;
import com.example.demo.entities.*;

@Service
public class PaymentService {
	
	@Autowired
	PaymentRepository prepo;
	
	@Autowired
	LoginRepository lrepo;
	
	public void updateLoginStatusBasedOnPayments() {
        List<Payment> paymentsWithSubscription = prepo.findBySubscription_idIsNotNull();

        for (Payment payment : paymentsWithSubscription) {
            Login login = payment.getLogin_id();
            login.setStatus(true);  // Set the status to true
            lrepo.save(login);
        }
    }
	
	public Payment save(Payment l)
	{
		return prepo.save(l);
	}
	
	public List<Payment> getAll()
	{
		return prepo.findAll();
	}
	

}
