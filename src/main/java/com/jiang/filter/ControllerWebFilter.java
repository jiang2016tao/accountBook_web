package com.jiang.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

@WebFilter(filterName="ControllerWebFilter",urlPatterns="*.do")
public class ControllerWebFilter implements Filter {
	private Logger logger=Logger.getLogger( ControllerWebFilter.class );
	@Override
	public void destroy() {

	}

	@Override
	public void doFilter( ServletRequest request, ServletResponse response, FilterChain chain ) throws IOException, ServletException {
		HttpServletResponse httpResponse=( HttpServletResponse )response;
		try{
			logger.info("doFilter");
			httpResponse.setHeader( "Access-Control-Allow-Origin", "*" );
			httpResponse.setHeader( "Access-Control-Allow-Methods", "POST,GET" );
			chain.doFilter( request, response );
		}catch (Exception e) {
			logger.error( e.getMessage(),e );
		}
	}

	@Override
	public void init( FilterConfig arg0 ) throws ServletException {
		logger.info( "ControllerWebFilter INIT" );
	}

}
