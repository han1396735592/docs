(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{126:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_5-hystrix超时和功能区客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-hystrix超时和功能区客户端","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.Hystrix超时和功能区客户端")]),t._v(" "),s("p",[t._v("使用包装功能区客户端的Hystrix命令时，要确保将Hystrix超时配置为长于配置的功能区超时，包括可能进行的任何可能的重试。例如，如果您的功能区连接超时为一秒，并且功能区客户端可能会重试该请求三次，那么您的Hystrix超时应该稍微超过三秒。")]),t._v(" "),s("h2",{attrs:{id:"_5-1如何包含hystrix仪表板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1如何包含hystrix仪表板","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.1如何包含Hystrix仪表板")]),t._v(" "),s("p",[t._v("要在项目中包含Hystrix仪表板，请使用具有组ID "),s("code",[t._v("org.springframework.cloud")]),t._v("和工件ID 的启动器"),s("code",[t._v("spring-cloud-starter-netflix-hystrix-dashboard")]),t._v("。有关使用当前Spring Cloud Release Train设置构建系统的详细信息，请参阅"),s("a",{attrs:{href:"https://projects.spring.io/spring-cloud/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Project页面"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("要运行Hystrix仪表板，请使用以下命令注释Spring Boot主类"),s("code",[t._v("@EnableHystrixDashboard")]),t._v("。然后访问"),s("code",[t._v("/hystrix")]),t._v("并将仪表板指向"),s("code",[t._v("/hystrix.stream")]),t._v("Hystrix客户端应用程序中的单个实例的端点。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("img",{attrs:{src:"http://cloud.spring.io/spring-cloud-netflix/single/images/note.png",alt:"[注意]"}})])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("连接到"),s("code",[t._v("/hystrix.stream")]),t._v("使用HTTPS 的端点时，JVM必须信任服务器使用的证书。如果证书不受信任，则必须将证书导入JVM，以便Hystrix仪表板成功连接到流端点。")])])])]),t._v(" "),s("h2",{attrs:{id:"_5-2涡轮机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2涡轮机","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.2涡轮机")]),t._v(" "),s("p",[t._v("查看单个实例的Hystrix数据在系统的整体运行状况方面不是很有用。"),s("a",{attrs:{href:"https://github.com/Netflix/Turbine",target:"_blank",rel:"noopener noreferrer"}},[t._v("Turbine"),s("OutboundLink")],1),t._v("是一个应用程序，它将所有相关"),s("code",[t._v("/hystrix.stream")]),t._v("端点聚合为一个组合"),s("code",[t._v("/turbine.stream")]),t._v("，以便在Hystrix仪表板中使用。个别实例位于尤里卡。运行Turbine需要使用注释来注释主类"),s("code",[t._v("@EnableTurbine")]),t._v("（例如，通过使用spring-cloud-starter-netflix-turbine来设置类路径）。"),s("a",{attrs:{href:"https://github.com/Netflix/Turbine/wiki/Configuration-(1.x)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Turbine 1 wiki中"),s("OutboundLink")],1),t._v("所有记录的配置属性均适用。唯一的区别是"),s("code",[t._v("turbine.instanceUrlSuffix")]),t._v("不需要前置端口，因为这是自动处理的，除非"),s("code",[t._v("turbine.instanceInsertPort=false")]),t._v("。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("img",{attrs:{src:"http://cloud.spring.io/spring-cloud-netflix/single/images/note.png",alt:"[注意]"}})])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("默认情况下，Turbine "),s("code",[t._v("/hystrix.stream")]),t._v("通过在Eureka中查找它"),s("code",[t._v("hostName")]),t._v("和"),s("code",[t._v("port")]),t._v("条目然后附加"),s("code",[t._v("/hystrix.stream")]),t._v("到它来查找已注册实例上的端点。如果实例的元数据包含"),s("code",[t._v("management.port")]),t._v("，则使用它来代替端点的"),s("code",[t._v("port")]),t._v("值"),s("code",[t._v("/hystrix.stream")]),t._v("。默认情况下，调用的元数据条目"),s("code",[t._v("management.port")]),t._v("等于"),s("code",[t._v("management.port")]),t._v("配置属性。它可以通过以下配置覆盖：")])])])]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management.port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("management.port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("该"),s("code",[t._v("turbine.appConfig")]),t._v("配置的关键是，涡轮用来查找实例尤里卡serviceIds列表。然后，在Hystrix仪表板中使用涡轮流，其URL类似于以下内容：")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("http:")]),t._v("//my.turbine.server:8080/turbine.stream?cluster=CLUSTERNAME\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果名称是，则可以省略cluster参数"),s("code",[t._v("default")]),t._v("。该"),s("code",[t._v("cluster")]),t._v("参数必须项匹配"),s("code",[t._v("turbine.aggregator.clusterConfig")]),t._v("。从尤里卡返回的值是大写的。因此，如果有一个名为"),s("code",[t._v("customers")]),t._v("Eureka注册的应用程序，则以下示例有效：")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("turbine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aggregator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CUSTOMERS\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("appConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" customers\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("如果需要自定义Turbine应使用的集群名称（因为您不希望在"),s("code",[t._v("turbine.aggregator.clusterConfig")]),t._v("配置中存储集群名称 ），请提供类型的bean "),s("code",[t._v("TurbineClustersProvider")]),t._v("。")]),t._v(" "),s("p",[t._v("所述"),s("code",[t._v("clusterName")]),t._v("可以通过SPEL表达被定制"),s("code",[t._v("turbine.clusterNameExpression")]),t._v("以根作为实例"),s("code",[t._v("InstanceInfo")]),t._v("。默认值是"),s("code",[t._v("appName")]),t._v("，这意味着尤里卡"),s("code",[t._v("serviceId")]),t._v("成为群集键（即，"),s("code",[t._v("InstanceInfo")]),t._v("对于客户具有"),s("code",[t._v("appName")]),t._v("的"),s("code",[t._v("CUSTOMERS")]),t._v("）。另一个示例是"),s("code",[t._v("turbine.clusterNameExpression=aSGName")]),t._v("，它从AWS ASG名称中获取群集名称。以下清单显示了另一个示例：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("turbine:\n  aggregator:\n    clusterConfig: SYSTEM,USER\n  appConfig: customers,stores,ui,admin\n  clusterNameExpression: metadata['cluster']\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("在前面的示例中，来自四个服务的集群名称是从其元数据映射中提取的，并且应该具有包含"),s("code",[t._v("SYSTEM")]),t._v("和的值"),s("code",[t._v("USER")]),t._v("。")]),t._v(" "),s("p",[t._v("要为所有应用程序使用“默认”群集，您需要一个字符串文字表达式（如果它在YAML中，则使用单引号并使用双引号进行转义）：")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("turbine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("appConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" customers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("stores\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterNameExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'default'\"")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Spring Cloud提供了一个"),s("code",[t._v("spring-cloud-starter-netflix-turbine")]),t._v("具有运行Turbine服务器所需的所有依赖关系。要广告Turnbine，请创建一个Spring Boot应用程序并使用它进行注释"),s("code",[t._v("@EnableTurbine")]),t._v("。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("img",{attrs:{src:"http://cloud.spring.io/spring-cloud-netflix/single/images/note.png",alt:"[注意]"}})])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("默认情况下，Spring Cloud允许Turbine使用主机和端口为每个群集允许每个主机进行多个进程。如果你想在本地Netflix的行为内置式水轮机"),s("em",[t._v("不是")]),t._v("允许每个主机上的多个过程，每簇（关键实例ID是主机名），设置"),s("code",[t._v("turbine.combineHostPort=false")]),t._v("。")])])])]),t._v(" "),s("h3",{attrs:{id:"_5-2-1集群端点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1集群端点","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.2.1集群端点")]),t._v(" "),s("p",[t._v("在某些情况下，其他应用程序可能会知道在Turbine中配置了哪些custers。为了支持这一点，您可以使用"),s("code",[t._v("/clusters")]),t._v("端点，该端点将返回所有已配置集群的JSON数组。")]),t._v(" "),s("p",[s("strong",[t._v("GET /集群。")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RACES"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8383/turbine.stream?cluster=RACES"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WEB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8383/turbine.stream?cluster=WEB"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("可以通过设置"),s("code",[t._v("turbine.endpoints.clusters.enabled")]),t._v("为禁用此端点"),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"_5-3涡轮流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3涡轮流","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.3涡轮流")]),t._v(" "),s("p",[t._v("在某些环境中（例如在PaaS设置中），从所有分布式Hystrix命令中提取指标的经典Turbine模型不起作用。在这种情况下，您可能希望让Hystrix命令将指标推送到Turbine。Spring Cloud通过消息传递实现。要在客户端上执行"),s("code",[t._v("spring-cloud-netflix-hystrix-stream")]),t._v("此操作"),s("code",[t._v("spring-cloud-starter-stream-*")]),t._v("，请为您的选择添加依赖项。有关代理以及如何配置客户端凭据的详细信息，请参阅"),s("a",{attrs:{href:"https://docs.spring.io/spring-cloud-stream/docs/current/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Stream文档"),s("OutboundLink")],1),t._v("。它应该为本地经纪人开箱即用。")]),t._v(" "),s("p",[t._v("在服务器端，创建一个Spring Boot应用程序并使用它进行注释"),s("code",[t._v("@EnableTurbineStream")]),t._v("。Turbine Stream服务器需要使用Spring Webflux，因此"),s("code",[t._v("spring-boot-starter-webflux")]),t._v("需要包含在您的项目中。"),s("code",[t._v("spring-boot-starter-webflux")]),t._v("添加"),s("code",[t._v("spring-cloud-starter-netflix-turbine-stream")]),t._v("到应用程序时默认包含在内。")]),t._v(" "),s("p",[t._v("然后，您可以将Hystrix仪表板指向Turbine Stream Server而不是单独的Hystrix流。如果Turbine Stream在myhost上的端口8989上运行，则将其放入"),s("code",[t._v("http://myhost:8989")]),t._v("Hystrix仪表板中的流输入字段。电路以它们各自的前缀为前缀"),s("code",[t._v("serviceId")]),t._v("，后跟一个点（"),s("code",[t._v(".")]),t._v("），然后是电路名称。")]),t._v(" "),s("p",[t._v("Spring Cloud提供了一个"),s("code",[t._v("spring-cloud-starter-netflix-turbine-stream")]),t._v("具有运行Turbine Stream服务器所需的所有依赖关系。然后，您可以添加您选择的Stream活页夹 - 例如"),s("code",[t._v("spring-cloud-starter-stream-rabbit")]),t._v("。")]),t._v(" "),s("p",[t._v("Turbine Stream服务器也支持该"),s("code",[t._v("cluster")]),t._v("参数。与Turbine服务器不同，Turbine Stream使用eureka serviceId作为集群名称，这些不可配置。")]),t._v(" "),s("p",[t._v("如果Turbine Stream服务器在端口8989上运行，并且您的环境中"),s("code",[t._v("my.turbine.server")]),t._v("有两个eureka serviceId ，则您的Turbine Stream服务器上将提供以下URL。空集群名称将提供Turbine Stream服务器接收的所有指标。"),s("code",[t._v("customers``products``default")])]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("http:")]),t._v("//my.turbine.sever:8989/turbine.stream?cluster=customers\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("http:")]),t._v("//my.turbine.sever:8989/turbine.stream?cluster=products\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("http:")]),t._v("//my.turbine.sever:8989/turbine.stream?cluster=default\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("http:")]),t._v("//my.turbine.sever:8989/turbine.stream\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("因此，您可以将eureka serviceId用作Turbine仪表板（或任何兼容的仪表板）的群集名称。你并不需要配置像任何性能"),s("code",[t._v("turbine.appConfig")]),t._v("，"),s("code",[t._v("turbine.clusterNameExpression")]),t._v("并"),s("code",[t._v("turbine.aggregator.clusterConfig")]),t._v("为您的涡轮机流服务器。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("img",{attrs:{src:"http://cloud.spring.io/spring-cloud-netflix/single/images/note.png",alt:"[注意]"}})])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Turbine Stream服务器使用Spring Cloud Stream从配置的输入通道收集所有指标。这意味着它不会从每个实例主动收集Hystrix指标。它只能提供每个实例已经收集到输入通道中的指标。")])])])])])},[],!1,null,null,null);e.default=a.exports}}]);