package cn.qqhxj;

import java.util.EventObject;

/**
 * 事件类,用于封装事件源及一些与事件相关的参数.
 **/
public class MyEvent extends EventObject {
    private static final long serialVersionUID = 1L;
    /**
     * 事件源
     */
    private Object source;

    public MyEvent(Object source) {
        super(source);
        this.source = source;
    }

    @Override
    public Object getSource() {
        return source;
    }

    public void setSource(Object source) {
        this.source = source;
    }
}
