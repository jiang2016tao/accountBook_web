package com.jiang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jiang.service.UserService;
import com.jiang.util.HessianServiceUtil;

@Controller
@RequestMapping(value="/")
public class UserController {

	private UserService userService=HessianServiceUtil.getUserService();
	
	@RequestMapping(value="testUser")
	@ResponseBody
	public String testUser(){
		return userService.login();
	}
}
