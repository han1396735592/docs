const commonCatalogue =  {
	title:'总目录',
	collapsable: true,
	children: [
		['/spring-boot/','spring-boot'],
		['/java/','java'],
		['/docker/','docker'],
		['/linux/','linux'],
		['/springmvc/','springmvc'],
		['/mysql/','mysql'],
		['/stm32/','stm32'],
		['/spring-cloud/','spring-cloud'],
		['/other/','other'],
		['/dubbo/','dubbo'],
		['/interview/','面试题']
	]
}


module.exports = {
	
	'/java/':[commonCatalogue,{
		title:'java',
			collapsable:true,
			children:[
				['/java/java浏览器打开网页','java浏览器打开网页'],
			]
		}
	],
	'/spring-cloud/':[commonCatalogue],
	'/linux/':[
		commonCatalogue,
	],'/springmvc/':[
		commonCatalogue,
	],
	
	'/stm32/':[
		commonCatalogue,
	],
	'/docker/':[
		commonCatalogue,{
			title:'docker',
			collapsable:true,
			children:[
				['/docker/docker的安装','docker的安装'],
				['/docker/命令大全','docker命令大全'],
			]
		}
	],
	'/other/':[
		commonCatalogue,
	],
	'/mysql/':[
		commonCatalogue,{
			title:'mysql',
			collapsable: true,
			children: [
				['/mysql/安装问题','安装问题'],
				['/mysql/数据库的基本语法','数据库的基本语法'],
				['/mysql/计算机二级考试的基本问题','计算机二级考试的基本问题'],
				['/mysql/mysql的常用单词','mysql的常用单词'],
				['/mysql/mysql操作php的相关函数','mysql操作php的相关函数'],
				['/mysql/mysql操作php的相关函数','mysql操作php的相关函数'],
			]
		}
	],
	'/spring-boot/': [commonCatalogue,
		{
			title: 'spring-boot',
			collapsable: true,
			children: [
				["/spring-boot/springboot的两种使用方法","springboot的两种使用方法"],
				['/spring-boot/springboot常见问题','springboot常见问题'],
				['/spring-boot/websocket','websocket'],
				['/spring-boot/spring-boot返回文件流','spring-boot返回文件流'],
				['/spring-boot/springboot发送邮件','springboot发送邮件'],
				['springboot定时任务','springboot定时任务'],
				['springboot使用Quartz实现动态配置定时任务','springboot使用Quartz实现动态配置定时任务']
			]
		}
	],'/catalogue':[
		commonCatalogue,
	],
	'/log':[
		commonCatalogue
	],'/interview/':[
		commonCatalogue,{
			title: '面试题',
			collapsable: true,
			children: [
				['/interview/1-阿里巴巴/','阿里巴巴'],
			]
		}
	]
}
