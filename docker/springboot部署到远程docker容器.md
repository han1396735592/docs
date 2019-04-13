---
ditLink: true
sidebar: auto
---

### springboot部署到远程docker容器.md

## 1. 创建一个springboot项目

   [start.spring.io](https://start.spring.io)

## 2. 添加插件`docker-maven-plugin`

```xml
<plugin>
    <groupId>com.spotify</groupId>
    <artifactId>docker-maven-plugin</artifactId>
    <version>1.0.0</version>
    <configuration>
        <imageName>${docker.image.prefix}-${project.artifactId}</imageName>
        <!--<dockerDirectory>src/main/docker</dockerDirectory>-->
        <baseImage>java</baseImage>
        <entryPoint>["java", "-jar", "/${project.build.finalName}.jar"]</entryPoint>
        <resources>
            <resource>
                <targetPath>/</targetPath>
                <directory>${project.build.directory}</directory>
                <include>${project.build.finalName}.jar</include>
            </resource>
        </resources>
    </configuration>
</plugin>
```

