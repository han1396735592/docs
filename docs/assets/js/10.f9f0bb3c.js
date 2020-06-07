(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{225:function(e,s,t){"use strict";t.r(s);var n=t(0),r=Object(n.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-maven-plugin插件的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-maven-plugin插件的配置","aria-hidden":"true"}},[e._v("#")]),e._v(" docker-maven-plugin插件的配置")]),e._v(" "),t("h2",{attrs:{id:"第一步：打开docker远程api端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步：打开docker远程api端口","aria-hidden":"true"}},[e._v("#")]),e._v(" 第一步：打开docker远程API端口")]),e._v(" "),t("p",[e._v("我的是centos7系统，需要修改的文件是/usr/lib/systemd/system/docker.service 文件")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vim /usr/lib/systemd/system/docker.service \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如下是我的配置文件，需要添加的部分是在第13-17行：ExecStart=/usr/bin/dockerd的后面加上-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock，ok之后 :wq ,保存并退出。注意的是0.0.0.0，你没看错，这样配置就行，并不是自己的主机ip")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[Unit]\nDescription=Docker Application Container Engine\nDocumentation=https://docs.docker.com\nAfter=network-online.target firewalld.service\nWants=network-online.target\n\n[Service]\nType=notify\n# the default is not to use systemd for cgroups because the delegate issues still\n# exists and systemd currently does not support the cgroup feature set required\n# for containers run by docker\n\n#start add config\n\nExecStart=/usr/bin/dockerd  -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock\n\n#end\nExecReload=/bin/kill -s HUP $MAINPID\n# Having non-zero Limit*s causes performance problems due to accounting overhead\n# in the kernel. We recommend using cgroups to do container-local accounting.\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\n# Uncomment TasksMax if your systemd version supports it.\n# Only systemd 226 and above support this version.\n#TasksMax=infinity\nTimeoutStartSec=0\n# set delegate yes so that systemd does not reset the cgroups of docker containers\nDelegate=yes\n# kill only the docker process, not all processes in the cgroup\nKillMode=process\n# restart the docker process if it exits prematurely\nRestart=on-failure\nStartLimitBurst=3\nStartLimitInterval=60s\n\n[Install]\nWantedBy=multi-user.target\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br")])]),t("h2",{attrs:{id:"第二步：重启docker的守护进程，重启docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步：重启docker的守护进程，重启docker","aria-hidden":"true"}},[e._v("#")]),e._v(" 第二步：重启docker的守护进程，重启docker")]),e._v(" "),t("p",[e._v("命令如下：")]),e._v(" "),t("p",[t("strong",[e._v("systemctl daemon-reload")])]),e._v(" "),t("p",[t("strong",[e._v("systemctl restart docker")])]),e._v(" "),t("blockquote",[t("p",[e._v("输入"),t("code",[e._v("netstat -anp|grep 2375")]),e._v(" 显示docker正在监听2375端口")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[root@izjmd5lqoeeowpz ~]# netstat -anp|grep 2375\ntcp6       0      0 :::2375                 :::*                    LISTEN      2577/dockerd\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("p",[e._v("输入"),t("code",[e._v("curl 127.0.0.1:2375/info")]),e._v("  显示一大堆信息，证明端口已经对外开放了")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{"ID":"5ZCY:OFMV:ZO4J:WMQ2:OW57:76PX:VSF2:YX6W:6NKU:3YK6:5WJX:P7BT","Containers":0,"ContainersRunning":0,"ContainersPaused":0,"ContainersStopped":0,"Images":0,"Driver":"overlay2","DriverStatus":[["Backing Filesystem","extfs"],["Supports d_type","true"],["Native Overlay Diff","false"]],"SystemStatus":null,"Plugins":{"Volume":["local"],"Network":["bridge","host","macvlan","null","overlay"],"Authorization":null,"Log":["awslogs","fluentd","gcplogs","gelf","journald","json-file","logentries","splunk","syslog"]},"MemoryLimit":true,"SwapLimit":true,"KernelMemory":true,"CpuCfsPeriod":true,"CpuCfsQuota":true,"CPUShares":true,"CPUSet":true,"IPv4Forwarding":true,"BridgeNfIptables":true,"BridgeNfIp6tables":true,"Debug":false,"NFd":24,"OomKillDisable":true,"NGoroutines":44,"SystemTime":"2018-10-01T16:31:00.417378358+08:00","LoggingDriver":"json-file","CgroupDriver":"cgroupfs","NEventsListener":0,"KernelVersion":"3.10.0-514.26.2.el7.x86_64","OperatingSystem":"CentOS Linux 7 (Core)","OSType":"linux","Architecture":"x86_64","IndexServerAddress":"https://index.docker.io/v1/","RegistryConfig":{"AllowNondistributableArtifactsCIDRs":[],"AllowNondistributableArtifactsHostnames":[],"InsecureRegistryCIDRs":["127.0.0.0/8"],"IndexConfigs":{"docker.io":{"Name":"docker.io","Mirrors":[],"Secure":true,"Official":true}},"Mirrors":[]},"NCPU":1,"MemTotal":1928933376,"GenericResources":null,"DockerRootDir":"/var/lib/docker","HttpProxy":"","HttpsProxy":"","NoProxy":"","Name":"izjmd5lqoeeowpz","Labels":[],"ExperimentalBuild":false,"ServerVersion":"18.06.1-ce","ClusterStore":"","ClusterAdvertise":"","Runtimes":{"runc":{"path":"docker-runc"}},"DefaultRuntime":"runc","Swarm":{"NodeID":"","NodeAddr":"","LocalNodeState":"inactive","ControlAvailable":false,"Error":"","RemoteManagers":null},"LiveRestoreEnabled":false,"Isolation":"","InitBinary":"docker-init","ContainerdCommit":{"ID":"468a545b9edcd5932818eb9de8e72413e616e86e","Expected":"468a545b9edcd5932818eb9de8e72413e616e86e"},"RuncCommit":{"ID":"69663f0bd4b60df09991c08812a60108003fa340","Expected":"69663f0bd4b60df09991c08812a60108003fa340"},"InitCommit":{"ID":"fec3683","Expected":"fec3683"},"SecurityOptions":["name=seccomp,profile=default"]}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])},[],!1,null,null,null);s.default=r.exports}}]);