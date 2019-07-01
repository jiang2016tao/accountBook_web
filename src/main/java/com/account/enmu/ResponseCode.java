package com.account.enmu;


public enum ResponseCode {
	Ok(0),ParamError(-1),SystemError(-2);
	private int value;

	private ResponseCode( int value ) {
		this.value = value;
	}

	public int getValue() {
	
		return value;
	}
	
}
