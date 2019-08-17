# @WebFilter注解
<address>参考文章[@WebFilter注解](https://www.cnblogs.com/ooo0/p/10360952.html)</address>
按照参考文章里说的，只要使用了注解，tomcat容器启动的时候就会进行过滤了，但是在我的项目里就是不行。非要在html文件进行配置了
才可以。
web.xml配置：
```xml
<filter>
 	<filter-name>ControllerWebFilter</filter-name>
 	<filter-class>com.jiang.filter.ControllerWebFilter</filter-class>
 </filter>
 <filter-mapping>
  <filter-name>ControllerWebFilter</filter-name>
  <url-pattern>/*</url-pattern>
 </filter-mapping>
```
