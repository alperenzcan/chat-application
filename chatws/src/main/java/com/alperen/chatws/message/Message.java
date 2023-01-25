package com.alperen.chatws.message;


import com.alperen.chatws.base.BaseEntity;
import com.alperen.chatws.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "messages")
@Data
@EqualsAndHashCode(callSuper = false)
public class Message extends BaseEntity {

	@ManyToOne
	@JoinColumn(name="user_id", referencedColumnName = "id")
	private User sender;
	
	private String text;
}
