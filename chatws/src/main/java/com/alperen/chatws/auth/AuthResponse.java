package com.alperen.chatws.auth;

import com.alperen.chatws.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
public class AuthResponse {

	private String token;
	
	@JsonIgnoreProperties({"password","messages"})
	private User user;
}
