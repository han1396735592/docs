let sidebar1 = require('./sidebar1.js')
let sidebar2 = require('./sidebar2.js')

module.exports = {
	title: 'My study notes',
	description: '我的学习笔记',
	markdown:{
		lineNumbers:true
	},
	themeConfig: {

		sidebar: sidebar2,
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
