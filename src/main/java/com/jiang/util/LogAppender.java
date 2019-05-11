package com.jiang.util;

import org.apache.log4j.DailyRollingFileAppender;
import org.apache.log4j.Priority;
/**
 * 
 *  重写原有的log4j日志类。<br/>
 *  源码是大于等于优先级就会记录。<br/>
 *  <pre>
 *  public boolean isAsSevereAsThreshold(Priority priority)    
 {    
     return threshold == null || priority.isGreaterOrEqual(threshold);    
 }  
 *  </pre>
 *  重写之后只能是当前优先级的写入指定优先级的文件里。实现不同级别的日志写入指定的文件里。
 *  @author jiangguotao 时间 2019年5月11日 下午10:30:10
 *  @version 1.0 
 *  </br>
 */
public class LogAppender extends DailyRollingFileAppender {

	@Override
	public boolean isAsSevereAsThreshold( Priority priority ) {

		
		// 只判断是否相等，不判断优先级  
        return this.getThreshold().equals(priority);  
			
	}

}
