在左下角的Cortana中搜索Ubuntu，点击进入，看到的界面就如同我们在Ubuntu下的终端界面，在这个窗口测试一下ls命令，无误。
Windows 10下Linux子系统图形界面

```shell
sudo apt-get update   更新
```
```shell
sudo apt-get install xorg   安装 xorg
```
```shell
sudo apt-get install xfce4  安装xfce4
```
```shell
sudo apt-get install xrdp  安装xrdp
```
```shell
sudo sed -i 's/port=3389/port=3390/g' /etc/xrdp/xrdp.ini  配置xrdp  上面是配置端口
```
```shell
sudo echo xfce4-session >~/.xsession 向xsession中写入xfce4-session
```
```shell
sudo service xrdp restart 重启xrdp服务
```
如果有防火墙，允许就好了。
在Cortana中搜索远程桌面连接，点击进入，输入本机IP：端口，以及子系统用户名（在步骤2中，终端窗口@符号之前）

如果你是刚安装好的系统，先更新一下软件源和软件包，
```shell
sudo apt update && sudo apt upgrade -y
```
安装中文语言包：
```shell
sudo apt install -y language-pack-zh-hans language-pack-zh-hans-base
```
设置本地化环境变量：
```shell
echo "LANG=zh_CN.UTF-8" >> ~/.profile
```
重新打开 Ubuntu，完成！
乱码问题


```shell
sudo vi /etc/default/locale  
```
将如下添加进去，保存

```shell
LANG=zh_CN.UTF-8   
LANGUAGE="zh_CN:zh"  
```
安装中文字体（这里以文泉驿微米黑为例）：
```shell
sudo apt-get install ttf-wqy-microhei  
```

