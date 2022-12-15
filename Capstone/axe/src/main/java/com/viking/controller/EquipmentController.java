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

import com.viking.entity.Equipment;
import com.viking.entity.User;
import com.viking.service.EquipmentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EquipmentController {

	@Autowired
	EquipmentService equipmentService;

	@RequestMapping(value = "/addEquip/{userId}", 
			method = RequestMethod.POST
			)
	@ResponseBody
	public ResponseEntity<Object> addEquip(@RequestBody Equipment equipment, @PathVariable Integer userId) {

		try {
			User user = equipmentService.addEquip(userId, equipment);

			return new ResponseEntity<>(user, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
		} catch (Error e) {
			return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@RequestMapping(value = "/getEquipByEn/{equipmentNumber}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Object> getEquipByEn(@PathVariable String equipmentNumber) {
		try {
			Equipment foundEquip = (equipmentService).getEquipByEn(equipmentNumber);
			return new ResponseEntity<>(foundEquip, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
		} catch (Error e) {
			return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/deleteEquipById/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public ResponseEntity<Object> delete(@PathVariable Integer id) {
		try {
			 equipmentService.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
		} catch (Error e) {
			return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
