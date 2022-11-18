package com.viking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


	
	
	@Entity
	@Table(name="admin")
	public class Admin {
		
	    @Id
	    @Column(name = "id")
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		Integer id;
	    
	    @Column(name="firstname")
		String firstName;
	    @Column(name="lastname")
		String lastName;
	    
	    @Column(name="email", unique = true, nullable = false)
		String email;
	    @Column(name="password", nullable = false)
		String password;
		
	    
	    public Admin() {
			super();
		}


		public Admin(Integer id, String firstName, String lastName, String email, String password) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
			this.password = password;
		}


		public String getFirstName() {
			return firstName;
		}


		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}


		public String getLastName() {
			return lastName;
		}


		public void setLastName(String lastName) {
			this.lastName = lastName;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}


		public Integer getId() {
			return id;
		}


		@Override
		public String toString() {
			return "Admin [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
					+ ", password=" + password + "]";
		}
	    
	    
	    
		

}
