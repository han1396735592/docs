# GPIO 中断的使用


## GPIO 中断的使用步骤

1. ### 初始化 GPIO引脚作为输入引脚 `GPIO_Init()`

```c
GPIO_InitTypeDef GPIO_InitStructure;
GPIO_InitStructure.GPIO_Pin  = GPIO_Pin_1;
GPIO_InitStructure.GPIO_Mode = GPIO_Mode_IPD; //PF1设置成输入，默认下拉	  
GPIO_Init(GPIOF, &GPIO_InitStructure);//初始化GPIOF.1
```

2. ### 使能复用功能时钟 

```c
RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOF,ENABLE);
```

3. ### 设置IO口 与中断线的映射关系
```c
GPIO_EXTILineConfig(GPIO_PortSourceGPIOF,GPIO_PinSource1); 
```
4. ### 初始化线上中断 设置触发条件 

```c 
EXTI_InitTypeDef EXTI_InitStructure;
	
EXTI_InitStructure.EXTI_Line=EXTI_Line1;
EXTI_InitStructure.EXTI_Trigger = EXTI_Trigger_Rising;
EXTI_InitStructure.EXTI_LineCmd=ENABLE;
EXTI_Init(&EXTI_InitStructure);		

```

5. ### 配置中断分组

```c
NVIC_InitTypeDef NVIC_InitStructure;
NVIC_InitStructure.NVIC_IRQChannel = EXTI1_IRQn;			
NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority = 0x02;	
NVIC_InitStructure.NVIC_IRQChannelSubPriority = 0x03;					
NVIC_InitStructure.NVIC_IRQChannelCmd = ENABLE;							
NVIC_Init(&NVIC_InitStructure); 

```

6. ### 中断处理函数

```c
void EXTI1_IRQHandler(void)
{
	count++;
	EXTI_ClearITPendingBit(EXTI_Line1); //清除LINE0上的中断标志位  
} 

```

7. ### 手动清除中断

```c
EXTI_ClearITPendingBit(EXTI_Line1); //清除LINE0上的中断标志位  
```





