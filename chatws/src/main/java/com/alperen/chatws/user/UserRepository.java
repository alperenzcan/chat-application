package com.alperen.chatws.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
	
	User findByUsername(String username);

}
