package com.viking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.viking.entity.Admin;
import com.viking.service.AdminService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {

	@Autowired
	AdminService adminService;

	@RequestMapping(value = "/signUpAdmin", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Object> signUp(@RequestBody Admin admin) {

		try {
			Admin signedUpAdmin = adminService.save(admin);

			return new ResponseEntity<>(signedUpAdmin, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
		} catch (Error e) {
			return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@RequestMapping(value = "/signInAdmin", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Object> signIn(@RequestBody Admin admin) {

		try {
			Admin someAdmin = adminService.signIn(admin);

			return new ResponseEntity<>(someAdmin, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
		} catch (Error e) {
			return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@RequestMapping(value = "/getAdminByEmail/{email}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Object> getAdminByEmail(@PathVariable String email) {
		try {
			Admin foundAdmin = (adminService).getAdminByEmail(email);
			return new ResponseEntity<>(foundAdmin, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
		} catch (Error e) {
			return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
