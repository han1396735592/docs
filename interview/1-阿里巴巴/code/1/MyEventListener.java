package cn.qqhxj;

import java.util.EventListener;

/**
 * 事件监听器，实现java.util.EventListener接口。定义回调方法，将你想要做的事
 * 放到这个方法下,因为事件源发生相应的事件时会调用这个方法。
 */
public class MyEventListener implements EventListener {

    /**
     * 事件发生后的回调方法
     *
     * @param e 事件
     */
    public void fireCusEvent(MyEvent e) {
        MyEventSource Object = (MyEventSource) e.getSource();
        System.out.println("My name has been changed!");
        System.out.println("The current name is " + Object.getName());
    }
}
