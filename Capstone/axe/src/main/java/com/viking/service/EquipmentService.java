package com.viking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viking.entity.Equipment;
import com.viking.entity.User;
import com.viking.repo.EquipmentRepo;


	
	@Service
	public class EquipmentService {

		@Autowired
		EquipmentRepo equipmentRepo;
		@Autowired
		UserService userService;
		
		
		public Equipment save(Equipment equipment) {
			return equipmentRepo.save(equipment);
		}
		
		public Equipment getEquipByEn(String equipmentNumber) throws Exception {
			Equipment foundEquipment = ((EquipmentService) equipmentRepo).getEquipByEn(equipmentNumber);
			
			if(foundEquipment == null) {
				throw new Exception("No user found.");
			}

			return foundEquipment;
		}
		public User addEquip(Integer userId, Equipment equipment) {
			
			User user = userService.getUserById(userId);
			save(equipment);
			user.getEquipment().add(equipment);
			return userService.save(user);
			
		}
		public void delete(Integer equipmentId) {
			equipmentRepo.deleteById(equipmentId)	;
			}
}
