package com.example;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
@Entity
@Data
public class Food {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int fid;
	private String fname;
	private float price;
	private String discription;
}
