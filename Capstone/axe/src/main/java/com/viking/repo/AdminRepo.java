package com.viking.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.viking.entity.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer>{
	
	 @Query(value = "select * from user where email = ?1 and password = ?2", nativeQuery = true)
	    public Admin signIn(String email, String password);

	    @Query(value = "select * from user where email = ?1", nativeQuery = true)
	    public Admin getUserByEmail(String email);

}
