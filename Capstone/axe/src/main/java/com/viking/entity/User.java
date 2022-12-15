package com.viking.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;




	
	
	@Entity
	@Table(name="user")
	public class User {
		
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
	    
	    
	    @OneToMany
	    @JoinColumn(name="userId", referencedColumnName = "id")
	    List<Equipment> equipment;
		
	    
	    public User() {
			super();
		}


		public User(Integer id, String firstName, String lastName, String email, String password,
				List<Equipment> equipment) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
			this.password = password;
			this.equipment = equipment;
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


		public List<Equipment> getEquipment() {
			return equipment;
		}


		public void setEquipment(List<Equipment> equipment) {
			this.equipment = equipment;
		}


		public Integer getId() {
			return id;
		}


		@Override
		public String toString() {
			return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
					+ ", password=" + password + ", equipment=" + equipment + "]";
		}


		
	  
	    


}
