package com.alperen.chatws.user;

import java.util.Set;

import com.alperen.chatws.base.BaseEntity;
import com.alperen.chatws.message.Message;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "users")
@Data
@EqualsAndHashCode(callSuper = false)
public class User extends BaseEntity {
	
	private String username;
	
	private String password;
	
	@OneToMany
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private Set<Message> messages;
	
}
