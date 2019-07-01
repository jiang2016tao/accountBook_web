package com.account.bean;

import java.io.Serializable;

public class User implements Serializable {
	/**   
	 * serialVersionUID : TODO
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String userName;
	private String passWord;
	
	public Integer getId() {
	
		return id;
	}
	
	public void setId( Integer id ) {
	
		this.id = id;
	}
	
	public String getUserName() {
	
		return userName;
	}
	
	public void setUserName( String userName ) {
	
		this.userName = userName;
	}
	
	public String getPassWord() {
	
		return passWord;
	}
	
	public void setPassWord( String passWord ) {
	
		this.passWord = passWord;
	}
	
}
