package com.jiang.util;

import java.net.MalformedURLException;

import org.apache.log4j.Logger;

import com.jiang.service.AccountService;
import com.jiang.service.UserService;

public class HessianServiceUtil {

	private static Logger logger=Logger.getLogger( HessianServiceUtil.class );
	
	private static final String serverIp="http://192.168.43.184:18081";
	private static UserService userService;
	private static AccountService accountService;
	
	public static UserService getUserService(){
		if(userService==null){
			try {
				userService=HessianUtil.getHessianService( UserService.class, serverIp );
			} catch( MalformedURLException e ) {
				
				logger.error( e.getMessage(),e );
			}
		}
		return userService;
	}
	public static AccountService getAccountService(){
		if(accountService==null){
			try{
				accountService=HessianUtil.getHessianService( AccountService.class, serverIp );
			}catch (Exception e) {
				logger.error( e.getMessage(),e );
			}
		}
		return accountService;
	}
}
