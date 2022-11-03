package com.example;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User, String> {
	@Query("select user from User user where user.username=?1 and user.password=?2")
	public User findByLogin(String name ,String password);
	
	@Query("select user from User user where user.username=?1")
	public User findByuser(String name);

}
