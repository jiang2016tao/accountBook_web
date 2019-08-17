package com.jiang.util;

import java.math.BigDecimal;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.log4j.Logger;


public class NumberUtil {
	private static Logger logger=Logger.getLogger( NumberUtil.class );
	public static boolean isNumber(String str){
		Pattern pattern=Pattern.compile( "-?[0-9]+(\\.?[0-9]+)?" );
		String bigStr;
		try{
			bigStr=new BigDecimal(str).toString();
		}catch(Exception e){
			logger.error( e.getMessage(),e);
			return false;
		}
		Matcher isNum = pattern.matcher( bigStr );
		return !isNum.matches();
	}
}
