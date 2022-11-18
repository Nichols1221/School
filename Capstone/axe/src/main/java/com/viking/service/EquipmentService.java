package com.viking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viking.entity.Equipment;
import com.viking.repo.EquipmentRepo;


	
	@Service
	public class EquipmentService {

		@Autowired
		EquipmentRepo equipmentRepo;
		
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

}
