# Java 浏览器打开网页



```java
 Desktop desktop = Desktop.getDesktop();
 String url = "https://docs.github.qqhxj.cn";
 try {
 	if (desktop.isSupported(Desktop.Action.BROWSE)) {
     	desktop.browse(java.net.URI.create(url));
 	}
 } catch (IOException e) {
 	e.printStackTrace();
 }
```

