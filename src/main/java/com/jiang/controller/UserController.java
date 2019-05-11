package com.jiang.controller;


import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jiang.service.UserService;
import com.jiang.util.HessianServiceUtil;

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
}
