(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{189:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gpio-中断的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio-中断的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" GPIO 中断的使用")]),t._v(" "),a("h2",{attrs:{id:"gpio-中断的使用步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio-中断的使用步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" GPIO 中断的使用步骤")]),t._v(" "),a("ol",[a("li",[a("h3",{attrs:{id:"初始化-gpio引脚作为输入引脚-gpio-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化-gpio引脚作为输入引脚-gpio-init","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化 GPIO引脚作为输入引脚 "),a("code",[t._v("GPIO_Init()")])])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("GPIO_InitTypeDef GPIO_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nGPIO_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GPIO_Pin  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GPIO_Pin_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nGPIO_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GPIO_Mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GPIO_Mode_IPD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//PF1设置成输入，默认下拉\t  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GPIO_Init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GPIOF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("GPIO_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化GPIOF.1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("h3",{attrs:{id:"使能复用功能时钟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使能复用功能时钟","aria-hidden":"true"}},[t._v("#")]),t._v(" 使能复用功能时钟")])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RCC_APB2PeriphClockCmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RCC_APB2Periph_GPIOF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ENABLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("h3",{attrs:{id:"设置io口-与中断线的映射关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置io口-与中断线的映射关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置IO口 与中断线的映射关系")])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GPIO_EXTILineConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GPIO_PortSourceGPIOF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("GPIO_PinSource1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[a("h3",{attrs:{id:"初始化线上中断-设置触发条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化线上中断-设置触发条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化线上中断 设置触发条件")])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("EXTI_InitTypeDef EXTI_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\nEXTI_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EXTI_Line"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("EXTI_Line1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEXTI_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EXTI_Trigger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EXTI_Trigger_Rising"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEXTI_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EXTI_LineCmd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ENABLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EXTI_Init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("EXTI_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[a("h3",{attrs:{id:"配置中断分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置中断分组","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置中断分组")])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("NVIC_InitTypeDef NVIC_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNVIC_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NVIC_IRQChannel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EXTI1_IRQn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\nNVIC_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NVIC_IRQChannelPreemptionPriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x02")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\nNVIC_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NVIC_IRQChannelSubPriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\nNVIC_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NVIC_IRQChannelCmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ENABLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NVIC_Init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("NVIC_InitStructure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[a("h3",{attrs:{id:"中断处理函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中断处理函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 中断处理函数")])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EXTI1_IRQHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EXTI_ClearITPendingBit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EXTI_Line1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//清除LINE0上的中断标志位  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[a("h3",{attrs:{id:"手动清除中断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动清除中断","aria-hidden":"true"}},[t._v("#")]),t._v(" 手动清除中断")])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EXTI_ClearITPendingBit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EXTI_Line1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//清除LINE0上的中断标志位  ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])},[],!1,null,null,null);s.default=r.exports}}]);