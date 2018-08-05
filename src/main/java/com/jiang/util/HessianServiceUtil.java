package com.jiang.util;

import java.net.MalformedURLException;

import com.jiang.service.UserService;

public class HessianServiceUtil {

	//œ»’‚—˘–¥À¿£¨
	private static final String serverIp="http://127.0.0.1:8080";
	private static UserService userService;
	
	public static UserService getUserService(){
		if(userService==null){
			try {
				userService=HessianUtil.getHessianService( UserService.class, serverIp );
			} catch( MalformedURLException e ) {
				
				System.out.println( e );
					
			}
		}
		return userService;
	}
}
