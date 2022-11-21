package com.viking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="workorder")
public class Workorder {
	
	
	@Id
	@Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	@Column
	Integer workOrderNumber;
	@Column
	String problem;
	
	
	public Workorder() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Workorder(Integer id, Integer workOrderNumber, String problem) {
		super();
		this.id = id;
		this.workOrderNumber = workOrderNumber;
		this.problem = problem;
	}


	public Integer getWorkOrderNumber() {
		return workOrderNumber;
	}


	public void setWorkOrderNumber(Integer workOrderNumber) {
		this.workOrderNumber = workOrderNumber;
	}


	public String getProblem() {
		return problem;
	}


	public void setProblem(String problem) {
		this.problem = problem;
	}


	public Integer getId() {
		return id;
	}


	@Override
	public String toString() {
		return "Workorder [id=" + id + ", workOrderNumber=" + workOrderNumber + ", problem=" + problem + "]";
	}
	
	
	
	

}
