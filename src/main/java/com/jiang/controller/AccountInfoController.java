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
import com.jiang.util.StringUtil;
@Controller
@RequestMapping(value="/")
public class AccountInfoController {
	private Logger logger=Logger.getLogger( AccountInfoController.class );
	private AccountService accountService=HessianServiceUtil.getAccountService();
	
	@RequestMapping(value="findParentAccounts")
	@ResponseBody
	public WebResponse findParentAccounts(){
		try {
			return new WebResponse( accountService.findParentAccount() );
		} catch( Exception e ) {
			logger.error( e.getMessage(),e );
			return new WebResponse( ResponseCode.SystemError.getValue(), e.getMessage(), null );
		}
	}
	
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
	
	@RequestMapping(value="updateAccount")
	@ResponseBody
	public WebResponse updateAccount(AccountInfo accountInfo){
		if(null==accountInfo)
			return new WebResponse( ResponseCode.SystemError.getValue(), "accountInfo is null", null );
		if(StringUtil.isEmpty( accountInfo.getAccountName() ))
			return new WebResponse( ResponseCode.SystemError.getValue(), "accountName is null", null );
		try{
			if(accountInfo.getId()==null)
				accountService.addAccountInfo( accountInfo );
			else
				accountService.updateAccountInfo( accountInfo );
			return new WebResponse(ResponseCode.Ok.getValue(),"success",null);
		}catch(Exception e){
			logger.error( e.getMessage(),e );
			return new WebResponse( ResponseCode.SystemError.getValue(), e.getMessage(), null );
		}
	}
	
	@RequestMapping(value="deleteAccountById")
	@ResponseBody
	public WebResponse deleteAccountById(Integer id){
		if(id==null){
			return new WebResponse( ResponseCode.SystemError.getValue(), "id is null", null );
		}
		try{
			accountService.deleteAccountInfoById( id );
			return new WebResponse(ResponseCode.Ok.getValue(),"success",null);
		}catch(Exception e){
			logger.error( e.getMessage(),e );
			return new WebResponse( ResponseCode.SystemError.getValue(), e.getMessage(), null );
		}
	}
}
