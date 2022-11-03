package com.example;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins="*")
public class Controller {
	
	@Autowired
	UserRepo repo;
	@Autowired
	FoodRepo repo1;
	@Autowired
	RecordRepo repo2;
	
	String customer;
	//user
	@PostMapping("/user/register")
	public String insert(@RequestBody User user) {
		user.setRole("user");
		repo.save(user);
		return "user inserted successfully";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@RequestBody User user,HttpServletRequest request) {
		User u=repo.findByLogin(user.getUsername(), user.getPassword());
			if(u!=null && u.getRole().equals("user") ) {
				HttpSession session=request.getSession();
				session.setAttribute("username", user.getUsername());
				customer=user.getUsername();
				return "Hi "+user.getUsername();
				
			}
			else {
				return "wrong Credentials";
			}
	}
	
	@RequestMapping(value="/adminlogin", method=RequestMethod.POST)
	public String admin(@RequestBody User user,HttpServletRequest request) {
		User u=repo.findByLogin(user.getUsername(), user.getPassword());
			if(u!=null && u.getRole().equals("admin") ) {
				HttpSession session=request.getSession();
				session.setAttribute("username", user.getUsername());
				customer=user.getUsername();
				return "Hi "+user.getUsername();
			}
			else {
				return "wrong Credentials";
			}
	}
	
	
	//Food Controller
	@GetMapping("/allFood")
	public List<Food> getAllFood(){
		return repo1.findAll();
	}
	@GetMapping("/byPrice/{price}")
	public List<Food> getByPrice(@PathVariable float price){
		return repo1.findProductByPrice(price);
	}
	@GetMapping("/byName/{fname}")
	public List<Food> getByName(@PathVariable String fname){
		return repo1.findByName(fname);
	}
	@DeleteMapping("/delete/{id}")
	public List<Food> deleteById(@PathVariable Integer id){
		repo1.deleteById(id);
		return repo1.findAll();
	}
	@PostMapping("/addFood")
	public String addFood(@RequestBody Food food){
		repo1.save(food);
		return "Food Added !";
	}
	
	
	//Record
	@RequestMapping("/record/{id}")
	public String addRecord(@PathVariable Integer id){
		Record record=new Record();
		Food food=new Food();
		Optional<Food> fd=repo1.findById(id);
		food=fd.get();
		Date date=new Date();
		record.setCustomer(customer);
		record.setDate(date);
		record.setFname(food.getFname());
		repo2.save(record);
		return "Record added !";
	}
	
	@GetMapping("/getReord/customer")
	public List<Record> getRecord(){
		return repo2.findBycustomer(customer);
	}
	
	@GetMapping("allRecord")
	public List<Record> getAllRecord(){
		return repo2.findAll();
	}
}
