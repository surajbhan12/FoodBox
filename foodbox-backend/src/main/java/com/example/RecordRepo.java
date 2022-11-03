package com.example;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RecordRepo extends JpaRepository<Record, Integer>{
	@Query("select record from Record record where record.customer = ?1 group by date order by date")
	public List<Record> findBycustomer( String customer);

}
