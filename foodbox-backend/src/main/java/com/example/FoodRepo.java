package com.example;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FoodRepo extends JpaRepository<Food, Integer> {
	@Query("select food from Food food where food.price <= ?1")
	public List<Food> findProductByPrice(float price);
	
	@Query("select food from Food food where food.fname = ?1")
	public List<Food> findByName(String fname);

}
