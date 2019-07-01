package com.jiang.util;

import java.net.MalformedURLException;

import org.springframework.util.StringUtils;

import com.caucho.hessian.client.HessianProxyFactory;

public class HessianUtil {

	private static HessianProxyFactory factory=new HessianProxyFactory();
	
	public static <T> T getHessianService(Class<T> classOfT,String serverIp) throws MalformedURLException{
		if(classOfT==null||StringUtils.isEmpty( serverIp ))
			return null;
		String className=classOfT.getSimpleName();
		if(!serverIp.startsWith( "http://" ))
			serverIp="http://"+serverIp;
		String hessianUrl=serverIp+"/accountBook_server/hessian/"+className;
		@SuppressWarnings( "unchecked" )
		T hessianService=( T )factory.create( classOfT, hessianUrl );
		return hessianService;
	}
}
