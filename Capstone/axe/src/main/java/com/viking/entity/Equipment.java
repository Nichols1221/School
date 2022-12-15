package com.viking.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Equipment {
	
	
	  @Id
	    @Column(name = "id")
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		Integer id;
	    
	    @Column(name="equipmentnumber")
		String equipmentNumber;
	    @Column(name="nomen")
		String nomen;
	    @Column(name="manufacturer")
		String manufacturer;
	    @Column(name="model")
		String model;
	    @Column(name="date")
		Date inServiceDate;
	    
	   
	    
		
	    public Equipment() {
			super();
		}


		public Equipment(Integer id, String equipmentNumber, String nomen, String manufacturer, String model,
				Date inServiceDate, Integer userCreated) {
			super();
			this.id = id;
			this.equipmentNumber = equipmentNumber;
			this.nomen = nomen;
			this.manufacturer = manufacturer;
			this.model = model;
			this.inServiceDate = inServiceDate;
			
		}


		public String getEquipmentNumber() {
			return equipmentNumber;
		}


		public void setEquipmentNumber(String equipmentNumber) {
			this.equipmentNumber = equipmentNumber;
		}


		public String getNomen() {
			return nomen;
		}


		public void setNomen(String nomen) {
			this.nomen = nomen;
		}


		public String getManufacturer() {
			return manufacturer;
		}


		public void setManufacturer(String manufacturer) {
			this.manufacturer = manufacturer;
		}


		public String getModel() {
			return model;
		}


		public void setModel(String model) {
			this.model = model;
		}


		public Date getInServiceDate() {
			return inServiceDate;
		}


		public void setInServiceDate(Date inServiceDate) {
			this.inServiceDate = inServiceDate;
		}


		public Integer getId() {
			return id;
		}


		@Override
		public String toString() {
			return "Equipment [id=" + id + ", equipmentNumber=" + equipmentNumber + ", nomen=" + nomen
					+ ", manufacturer=" + manufacturer + ", model=" + model + ", inServiceDate=" + inServiceDate
					+ ", userId=" ;
		}

		
	
	    	
}
