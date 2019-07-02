package com.jiang.controller;


import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.account.bean.User;
import com.account.bean.WebResponse;
import com.account.enmu.ResponseCode;
import com.jiang.service.UserService;
import com.jiang.util.HessianServiceUtil;
import com.jiang.util.StringUtil;

@Controller
@RequestMapping(value="/")
public class UserController {

	private UserService userService=HessianServiceUtil.getUserService();
	
	private Logger logger=Logger.getLogger( UserController.class );
	
	@RequestMapping(value="testUser")
	@ResponseBody
	public String testUser(){
		logger.debug( "debug log" );
		logger.info( "info log" );
		logger.warn( "warn log" );
		logger.error( "error log" );
		return userService.login();
	}
	
	@RequestMapping(value="addUser")
	@ResponseBody
	public WebResponse addUser(User user){
		if(StringUtil.isEmpty( user.getUserName() )||StringUtil.isEmpty( user.getPassWord() ))
			return new WebResponse( ResponseCode.ParamError.getValue(), "userName or passWord is null", null );
		try{
			userService.addUser( user );
			return new WebResponse( ResponseCode.Ok.getValue() );
		}catch (Exception e) {
			logger.error( e.getMessage(),e );
			return new WebResponse( ResponseCode.SystemError.getValue(), e.getMessage(), null );
		}
	}
	
	@RequestMapping(value="updateUser")
	@ResponseBody
	public WebResponse updateUser(Integer userId,String newPassWord){
		if(userId==null || StringUtil.isEmpty( newPassWord ))
			return new WebResponse( ResponseCode.ParamError.getValue(), "userId or newPassWord is null", null );
		try{
			userService.updatePassWord( userId, newPassWord );
			return new WebResponse( ResponseCode.Ok.getValue() );
		}catch (Exception e) {
			logger.error( e.getMessage(),e );
			return new WebResponse( ResponseCode.SystemError.getValue(), e.getMessage(), null );
		}
	}
	
	@RequestMapping(value="deleteUser")
	@ResponseBody
	public WebResponse deleteUser(Integer userId){
		if(userId==null)
			return new WebResponse( ResponseCode.ParamError.getValue(), "userId is null", null );
		try{
			userService.deleteUser( userId );
			return new WebResponse( ResponseCode.Ok.getValue() );
		}catch (Exception e) {
			logger.error( e.getMessage(),e );
			return new WebResponse( ResponseCode.SystemError.getValue(), e.getMessage(), null );
		}
	}
	
	@RequestMapping(value="findUsers")
	@ResponseBody
	public WebResponse findUsers(User user){
		try{
			return new WebResponse( userService.findUserByFilter( user ) );
		}catch (Exception e) {
			logger.error( e.getMessage(),e );
			return new WebResponse( ResponseCode.SystemError.getValue(), e.getMessage(), null );
		}
	}
	
	public static void main( String[] args ) {
		UserService userService=HessianServiceUtil.getUserService();
		System.out.println( userService.findUserByFilter( new User() ));
	}
}
