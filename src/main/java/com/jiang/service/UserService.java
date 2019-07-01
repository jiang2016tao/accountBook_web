package com.jiang.service;

import com.account.bean.User;

public interface UserService {
	public String login();
	/**
	 * 
	 *  添加用户
	 * @author jiangguotao 时间 2019年5月15日 下午11:19:40
	 * @param user
	 */
	void addUser(User user);
	/**
	 * 根据用户id删除用户
	 * @author jiangguotao 时间 2019年5月15日 下午11:20:09
	 * @param id
	 */
	void deleteUser(Integer id);
	/**
	 * 更新密码
	 * @author jiangguotao 时间 2019年5月15日 下午11:20:45
	 * @param id
	 * @param newPassWord
	 */
	void updatePassWord(Integer id,String newPassWord);
	/**
	 * 根据条件查找用户
	 * @author jiangguotao 时间 2019年5月15日 下午11:21:28
	 * @param user
	 * @return
	 */
	User findUserByFilter(User user);
}
