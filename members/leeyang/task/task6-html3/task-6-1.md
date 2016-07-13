---
title: jrg任务6-HTML3
date: 2016-04-01 10:21:02
tags:
 -任务代码展示
categories:
 -任务代码展示
---
# 问答
### line-height有什么作用
答：line-height属性设置行间的距离（行高）。
1.对于块级元素，CSS属性line-height指定了元素内部行块的**最小**高度。
2.对于非替代行内元素，line-height用于计算**行块**的高度。
3.对于替代行内元素，如button或其他input元素，line-height没有影响。

参考：[MDN line-height](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height)

### 如何去查CSS熟悉的兼容性？比如inline-block哪些浏览器支持？
答：1.[caniuse.com](http://caniuse.com/)
   ![](http://ww4.sinaimg.cn/large/bd3d5249gw1f2h0bu09w0j211p0jik14.jpg)
   2.inline-block所有主流浏览器都支持
   ![](http://ww2.sinaimg.cn/large/bd3d5249gw1f2h0rd89bsj211c0jgagg.jpg)

### a标签的href,title,target是什么？title和alt有什么区别？如何新窗口打开链接？
答：1.
![](http://ww3.sinaimg.cn/large/bd3d5249gw1f2h6g5a1kjj20h504cmy1.jpg)

2.使用**title**属性时，可以让鼠标悬停在超链接上时，显示该超链接的文字注释。
使用**alt**属性时，用来为元素提供额外的说明。
**PS**:alt是html标签的属性，而title既是html标签，又是html属性。
**新窗口打开连接**:target=_blank

### display:none和visibility:hidden有什么作用？有什么区别？
答：
1.当display属性值为none的时候，此元素不会被显示；当visibility属性值为hidden的时候，元素也为不可见的。
2.visibility:hidden属性会使对象不可见，**但该对象在网页所占的空间没有改变**（看不见但摸得到），等于留出一块空白区域；
display:none时，属性会使这个对象彻底消失（看不见也摸不到）。
参考 [display:none和visibility:hidden的区别！](http://bbs.blueidea.com/thread-2942695-1-1.html)