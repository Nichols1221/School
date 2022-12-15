package com.viking.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.viking.entity.Equipment;

@Repository
public interface EquipmentRepo extends JpaRepository<Equipment, Integer>{
	
	 @Query(value = "select * from equipment where userCreated = ?1", nativeQuery = true)
	    public Equipment selectAll();

	 @Query(value = "select * from equipment where equipmentNumber = ?1", nativeQuery = true)
	 	public Equipment findbyEN();
}