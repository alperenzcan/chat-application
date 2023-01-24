package com.alperen.chatws.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping
public class ChatResource {
	
	@Autowired
	private SimpMessagingTemplate messagingTemplate;
	
	@MessageMapping("/message")
	@SendTo("/chatroom/public")
	public Message sendMessage(@Payload Message message) {
		return message;
	}
	
}
