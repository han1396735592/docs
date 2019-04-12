> #  spring   的常见问题

###  1.搭建环境

#####  用 maven 搭建环境

    在 `pom.xml`  的  `<dependencies></dependencies> `标签中添加以下代码

```xml
<!-- 引入 springmvc  -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>

<!-- 引入   springmvc  的依赖  jar spring-web  -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>

<!-- 引入   springmvc  的依赖  jar spring-expression  -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-expression</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>

<!-- 引入   springmvc  的依赖  jar spring-core  -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>

<!-- 引入   springmvc  的依赖  jar spring-context  -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>

<!-- 引入   springmvc  的依赖  jar spring-beans  -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-beans</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>
```
###  2.配置环境
   配置springMVC的核心  在  web.xml 中添加 以下代码
```xml
<!--   配置  springmvc 的中央处理器，DispatcherServlet   -->
<servlet>
	<servlet-name>DispatcherServlet</servlet-name>
		<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
		<init-param>
			<param-name>contextConfigLocation</param-name>
			<param-value>classpath:spring/controller.xml</param-value>
		</init-param>
</servlet>

<servlet-mapping>
		<servlet-name>DispatcherServlet</servlet-name>
		<url-pattern>*.action</url-pattern>
</servlet-mapping>
```
在 src/spring/controller.xml  配置一下信息
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
	xmlns:tx="http://www.springframework.org/schema/tx" xmlns:mvc="http://www.springframework.org/schema/mvc"
	xsi:schemaLocation="http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-4.2.xsd
		http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.2.xsd
		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.2.xsd
		http://www.springframework.org/schema/tx http://www.springframework.org/schema/util
		http://www.springframework.org/schema/util http://www.springframework.org/schema/util">

	<context:component-scan base-package="cn.qqhxj.example.controller"></context:component-scan>
</beans>
```
在  cn.qqhxj.example.ontroller  中新建一个类
```java
package cn.qqhxj.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import cn.qqhxj.zsh.entity.User;
@RequestMapping("example")
@Controller
public class ExampleController {

	@RequestMapping("test")
	public String  exampleTest(){
		return "/index.jsp";
	}	
}
```
在浏览器中输入 http://localhost:8080/example/test.action  如果可以跳转到 `index.jsp` 即配置成功
