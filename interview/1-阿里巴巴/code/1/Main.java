package cn.qqhxj;

import cn.qqhxj.MyEvent;
import cn.qqhxj.MyEventListener;
import cn.qqhxj.MyEventSource;

public class Main {

    public static void main(String[] args) {
        MyEventSource object = new MyEventSource();
        //注册监听器
        object.addCusListener(new MyEventListener(){
            @Override
            public void fireCusEvent(MyEvent e) {
                super.fireCusEvent(e);
            }
        });
        //触发事件
        object.setName("new name");
    }
}
