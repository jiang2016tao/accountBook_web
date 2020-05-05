package com.account.bean;

import java.io.Serializable;

public class AccountInfo implements Serializable {

	/**
	 * serialVersionUID : TODO
	 */
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String accountName;
	private Integer parentId;
	private String parentName;

	public String getParentName() {

		return parentName;
	}

	public void setParentName( String parentName ) {

		this.parentName = parentName;
	}


	public Integer getId() {

		return id;
	}


	public void setId( Integer id ) {

		this.id = id;
	}


	public String getAccountName() {

		return accountName;
	}


	public void setAccountName( String accountName ) {

		this.accountName = accountName;
	}


	public Integer getParentId() {

		return parentId;
	}


	public void setParentId( Integer parentId ) {

		this.parentId = parentId;
	}

}
