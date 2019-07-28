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
		['/other/','other']
	]
}
module.exports = {
	'/java/':[commonCatalogue,
	],
	'/spring-cloud/':[commonCatalogue],
	'/linux/':[
		commonCatalogue,
	],'/springmvc/':[
		commonCatalogue,
	],
	'/catalogue':[
		commonCatalogue,
	],
	'/stm32/':[
		commonCatalogue,
	],
	'/docker/':[
		commonCatalogue,
	],
	'/other/':[
		commonCatalogue
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
				['/spring-boot/springboot发送邮件','springboot发送邮件']
			]
		}
	]
}
