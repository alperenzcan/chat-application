package com.alperen.chatws.bootstrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.alperen.chatws.message.Message;
import com.alperen.chatws.message.MessageRepository;
import com.alperen.chatws.user.User;
import com.alperen.chatws.user.UserRepository;

@Component
public class DataInitializor implements CommandLineRunner {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private MessageRepository messageRepository;
	
	@Override
	public void run(String... args) throws Exception {
		User user1 = new User();
		user1.setUsername("alperen");
		user1.setPassword("P4ssword");
		User savedUser1 = userRepository.save(user1);
		
		User user2 = new User();
		user2.setUsername("emre");
		user2.setPassword("P4ssword");
		User savedUser2 = userRepository.save(user2);
		
		User user3 = new User();
		user3.setUsername("tolga");
		user3.setPassword("P4ssword");
		User savedUser3 = userRepository.save(user3);
		
		Message message = new Message();
		message.setSender(savedUser1);
		message.setText("Message text");
		messageRepository.save(message);
	}

}
