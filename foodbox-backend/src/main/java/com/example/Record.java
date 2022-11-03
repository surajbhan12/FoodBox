package com.example;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
@Entity
@Data
public class Record {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int rid;
	private String customer;
	private Date date;
	private String fname;
}
