package com.cybagepoc.demopoc;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ToDoList {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	public Integer Id;
	public String listValue;
	
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public String getListValue() {
		return listValue;
	}
	public void setListValue(String listValue) {
		this.listValue = listValue;
	}
}
