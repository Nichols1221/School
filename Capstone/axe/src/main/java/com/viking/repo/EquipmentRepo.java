package com.viking.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.viking.entity.Equipment;

@Repository
public interface EquipmentRepo extends JpaRepository<Equipment, Integer>{
	
	 @Query(value = "select * from user where email = ?1 and password = ?2", nativeQuery = true)
	    public Equipment signIn(String email, String password);

	    
}