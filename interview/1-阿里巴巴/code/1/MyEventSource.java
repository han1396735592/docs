package cn.qqhxj;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class MyEventSource {
    private String name;
    /**
     * 监听器容器
     */
    private Set<MyEventListener> listener;

    public MyEventSource() {
        this.listener = new HashSet<MyEventListener>();
        this.name = "defaultname";
    }

    /**
     * 给事件源注册监听器
     *
     * @param cel 监听器
     */
    public void addCusListener(MyEventListener cel) {
        this.listener.add(cel);
    }

    /**
     * 当事件发生时,通知注册在该事件源上的所有监听器做出相应的反应（调用回调方法）
     */
    protected void notifies() {
        MyEventListener cel = null;
        Iterator<MyEventListener> iterator = this.listener.iterator();
        while (iterator.hasNext()) {
            cel = iterator.next();
            cel.fireCusEvent(new MyEvent(this));
        }
    }

    public String getName() {
        return name;
    }

    /**
     * 模拟事件触发器
     * 当成员变量name的值发生变化时，触发事件。
     *
     * @param name name
     */
    public void setName(String name) {
        if (!this.name.equals(name)) {
            this.name = name;
            notifies();
        }
    }
}
