#  springmvc 基于注解的配置说明

### 如何定义一个类为一个控制器的类

   ```java
@Controller
public class ExampleController {

}
   ```

### 如何配置请求的路径
```java
@RequestMapping("example")
@Controller
public class ExampleController {

}
```
在方法上当然也需要配置
```
@RequestMapping("example")
@Controller
public class ExampleController {
	@RequestMapping("test")
	public String test() {
	   System.out.println("ExampleController.test()");
		return "/index.jsp";
	}
}
```
这样配置的话  请求的路径就是   "/example/test"
