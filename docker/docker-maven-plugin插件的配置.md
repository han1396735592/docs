## 第一步：打开docker远程API端口

​我的是centos7系统，需要修改的文件是/usr/lib/systemd/system/docker.service 文件

```
vim /usr/lib/systemd/system/docker.service 
```

 如下是我的配置文件，需要添加的部分是在第13-17行：ExecStart=/usr/bin/dockerd的后面加上-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock，ok之后 :wq ,保存并退出。注意的是0.0.0.0，你没看错，这样配置就行，并不是自己的主机ip

```
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target

[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker

#start add config

ExecStart=/usr/bin/dockerd  -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock

#end
ExecReload=/bin/kill -s HUP $MAINPID
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
#TasksMax=infinity
TimeoutStartSec=0
# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes
# kill only the docker process, not all processes in the cgroup
KillMode=process
# restart the docker process if it exits prematurely
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s

[Install]
WantedBy=multi-user.target
```

## 第二步：重启docker的守护进程，重启docker

命令如下：

**systemctl daemon-reload**   

**systemctl restart docker**  

> 输入`netstat -anp|grep 2375` 显示docker正在监听2375端口
>
> ```shell
> [root@izjmd5lqoeeowpz ~]# netstat -anp|grep 2375
> tcp6       0      0 :::2375                 :::*                    LISTEN      2577/dockerd
> ```
>

输入`curl 127.0.0.1:2375/info`  显示一大堆信息，证明端口已经对外开放了

```
{"ID":"5ZCY:OFMV:ZO4J:WMQ2:OW57:76PX:VSF2:YX6W:6NKU:3YK6:5WJX:P7BT","Containers":0,"ContainersRunning":0,"ContainersPaused":0,"ContainersStopped":0,"Images":0,"Driver":"overlay2","DriverStatus":[["Backing Filesystem","extfs"],["Supports d_type","true"],["Native Overlay Diff","false"]],"SystemStatus":null,"Plugins":{"Volume":["local"],"Network":["bridge","host","macvlan","null","overlay"],"Authorization":null,"Log":["awslogs","fluentd","gcplogs","gelf","journald","json-file","logentries","splunk","syslog"]},"MemoryLimit":true,"SwapLimit":true,"KernelMemory":true,"CpuCfsPeriod":true,"CpuCfsQuota":true,"CPUShares":true,"CPUSet":true,"IPv4Forwarding":true,"BridgeNfIptables":true,"BridgeNfIp6tables":true,"Debug":false,"NFd":24,"OomKillDisable":true,"NGoroutines":44,"SystemTime":"2018-10-01T16:31:00.417378358+08:00","LoggingDriver":"json-file","CgroupDriver":"cgroupfs","NEventsListener":0,"KernelVersion":"3.10.0-514.26.2.el7.x86_64","OperatingSystem":"CentOS Linux 7 (Core)","OSType":"linux","Architecture":"x86_64","IndexServerAddress":"https://index.docker.io/v1/","RegistryConfig":{"AllowNondistributableArtifactsCIDRs":[],"AllowNondistributableArtifactsHostnames":[],"InsecureRegistryCIDRs":["127.0.0.0/8"],"IndexConfigs":{"docker.io":{"Name":"docker.io","Mirrors":[],"Secure":true,"Official":true}},"Mirrors":[]},"NCPU":1,"MemTotal":1928933376,"GenericResources":null,"DockerRootDir":"/var/lib/docker","HttpProxy":"","HttpsProxy":"","NoProxy":"","Name":"izjmd5lqoeeowpz","Labels":[],"ExperimentalBuild":false,"ServerVersion":"18.06.1-ce","ClusterStore":"","ClusterAdvertise":"","Runtimes":{"runc":{"path":"docker-runc"}},"DefaultRuntime":"runc","Swarm":{"NodeID":"","NodeAddr":"","LocalNodeState":"inactive","ControlAvailable":false,"Error":"","RemoteManagers":null},"LiveRestoreEnabled":false,"Isolation":"","InitBinary":"docker-init","ContainerdCommit":{"ID":"468a545b9edcd5932818eb9de8e72413e616e86e","Expected":"468a545b9edcd5932818eb9de8e72413e616e86e"},"RuncCommit":{"ID":"69663f0bd4b60df09991c08812a60108003fa340","Expected":"69663f0bd4b60df09991c08812a60108003fa340"},"InitCommit":{"ID":"fec3683","Expected":"fec3683"},"SecurityOptions":["name=seccomp,profile=default"]}
```


