package com.jiang.util;


public class StringUtil {
	public static boolean isEmpty(String str){
		if(str==null)
			return true;
		if(str.equals( "" ))
			return true;
		else
			return false;
	}
}
