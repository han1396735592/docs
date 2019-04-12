> ## spring boot 的两种使用方法
>

> 继承父项目
>
> 导入依赖的pom

#### 方法一

要将项目配置为继承`spring-boot-starter-parent`，请在`pom.xml`按如下所示进行设置 ：

```xml
<！ - 继承默认值为Spring Boot  - > 
<parent> 
	<groupId> org.springframework.boot </ groupId> 
	<artifactId> spring-boot-starter-parent </ artifactId> 
	<version> 2.0.5.RELEASE < / version> 
</parent>
```

#### 方法二

​	不是每个人都喜欢从`spring-boot-starter-parent`POM 继承。您可能拥有自己需要使用的公司标准父级，或者您可能更愿意明确声明所有Maven配置。

​	如果您不想使用`spring-boot-starter-parent`，您仍然可以通过使用`scope=import`依赖关系来保持依赖关系管理（但不是插件管理）的好处 ，如下所示：

```xml
<dependencyManagement>
	<dependencies>
		<dependency>
			<!-- Import dependency management from Spring Boot -->
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-dependencies</artifactId>
			<version>2.0.5.RELEASE</version>
			<type>pom</type>
			<scope>import</scope>
		</dependency>
	</dependencies>
</dependencyManagement>
```

