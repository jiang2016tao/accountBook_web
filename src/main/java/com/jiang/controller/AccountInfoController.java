package com.jiang.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.account.bean.AccountInfo;
import com.account.bean.WebResponse;
import com.account.enmu.ResponseCode;
import com.jiang.service.AccountService;
import com.jiang.util.HessianServiceUtil;

@Controller
@RequestMapping(value="/")
public class AccountInfoController {
	private Logger logger=Logger.getLogger( AccountInfoController.class );
	private AccountService accountService=HessianServiceUtil.getAccountService();
	
	@RequestMapping(value="findAccountInfos")
	@ResponseBody
	public WebResponse findAccountInfos(AccountInfo accountInfo){
		try{
			return new WebResponse( accountService.findAccountInfo( accountInfo ) );
		}catch (Exception e) {
			logger.error( e.getMessage(),e );
			return new WebResponse( ResponseCode.SystemError.getValue(), e.getMessage(), null );
		}
	}
}
