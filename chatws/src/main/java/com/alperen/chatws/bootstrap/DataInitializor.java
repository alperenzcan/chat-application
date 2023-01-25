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
		User user = new User();
		user.setUsername("username01");
		user.setPassword("P4ssword");
		User savedUser = userRepository.save(user);
		
		Message message = new Message();
		message.setSender(savedUser);
		message.setText("Message text");
		messageRepository.save(message);
	}

}
