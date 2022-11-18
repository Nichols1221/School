package com.viking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viking.entity.Admin;
import com.viking.repo.AdminRepo;

@Service
public class AdminService {

	@Autowired
	AdminRepo adminRepo;
	
	public Admin save(Admin admin) {
		return adminRepo.save(admin);
	}
	
	public Admin signIn(Admin admin) throws Exception {
		Admin foundAdmin = adminRepo.signIn(admin.getEmail(), admin.getPassword());

		if(foundAdmin == null) {
			throw new Exception("No user found.");
		}

		return foundAdmin;
	}

	public Admin getAdminByEmail(String email) throws Exception {
		Admin foundAdmin = ((AdminService) adminRepo).getAdminByEmail(email);

		if(foundAdmin == null) {
			throw new Exception("No user found.");
		}

		return foundAdmin;
	}
}