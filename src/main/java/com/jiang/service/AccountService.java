package com.jiang.service;

import java.util.List;

import com.account.bean.AccountInfo;

public interface AccountService {

	void addAccountInfo(AccountInfo accountInfo);
	void deleteAccountInfoById(Integer id);
	void updateAccountInfo(AccountInfo accountInfo);
	List<AccountInfo> findAccountInfo(AccountInfo accountInfo);
	/**
	 * 
	 * 查找paraentId为-1的账户
	 * @author jiangguotao 时间 2020年5月4日 上午11:45:26
	 * @return
	 */
	List<AccountInfo> findParentAccount();
}
