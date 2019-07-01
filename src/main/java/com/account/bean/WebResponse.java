package com.account.bean;

import java.io.Serializable;

public class WebResponse implements Serializable {

	/**   
	 * serialVersionUID : TODO
	 */
	private static final long serialVersionUID = 1L;
	private int code;
	
	private String errorMsg;
	
	private Object data;

	public WebResponse( Object data ) {
		super();
		this.data = data;
	}

	public WebResponse( int code, String errorMsg, Object data ) {
		super();
		this.code = code;
		this.errorMsg = errorMsg;
		this.data = data;
	}

	public int getCode() {
	
		return code;
	}

	public void setCode( int code ) {
	
		this.code = code;
	}

	
	public String getErrorMsg() {
	
		return errorMsg;
	}

	
	public void setErrorMsg( String errorMsg ) {
	
		this.errorMsg = errorMsg;
	}

	
	public Object getData() {
	
		return data;
	}

	
	public void setData( Object data ) {
	
		this.data = data;
	}

}
