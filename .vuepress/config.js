// .vuepress/config.js
module.exports = {
	title: 'My study notes',
	description: '我的学习笔记',
	themeConfig: {
		sidebar: [{
				title: "快速链接",
				children: [
					'linux/无密登录',
				]
			}, {
				title: 'mysql',
				collapsable: true,
				children: [
					'mysql/数据库的基本语法',
					'mysql/计算机二级考试的基本问题',
					"mysql/mysql的常用单词",
					"mysql/mysql操作php的相关函数",
					'mysql/忘记密码',
					"mysql/安装问题",
				]
			},
			{
				title: 'java',
				collapsable: true,
				children: []
			},

			{
				title: 'linux',
				collapsable: true,
				children: [
					'linux/无密登录',
					'linux/Ubuntu更换阿里云软件源',
					'linux/win10如何使用ubuntu子系统'
				]
			}, {
				title: 'docker',
				collapsable: true,
				children: [
					'docker/docker的安装',
					'docker/springboot部署到远程docker容器',
					'docker/docker-maven-plugin插件的配置'
				]
			}, {
				title: 'spring boot',
				collapsable: true,
				children: [
					'spring-boot/springboot的两种使用方法',
					'spring-boot/springboot常见问题',
					'spring-boot/websocket',
					'spring-boot/springboot发送邮件'
				]
			}, {
				title: 'spring mvc',
				collapsable: true,
				children: [

				]
			}, {
				title: '其他',
				collapsable: true,
				children: [
					'other/软考/算法比较',
				]
			}
		],
		nav: [{
				text: '主页',
				link: '/'
			},
			{
				text: '目录',
				link: '/catalogue'
			},
		], // 假定 GitHub。也可以是一个完整的 GitLab URL。
		repo: 'han1396735592/docs',
		// 自定义项目仓库链接文字
		// 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
		repoLabel: '贡献代码！',

		// 以下为可选的 "Edit this page" 链接选项

		// 如果你的文档和项目位于不同仓库：
		docsRepo: 'han1396735592/docs',
		// 如果你的文档不在仓库的根目录下：
		docsDir: '',
		// 如果你的文档在某个特定的分支（默认是 'master' 分支）：
		docsBranch: 'master',
		// 默认为 false，设置为 true 来启用
		editLinks: true,
		// 自定义编辑链接的文本。默认是 "Edit this page"
		editLinkText: '帮助我们改进页面内容！'
	}
}
