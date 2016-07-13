# .clearfix原理


---

1、.clearfix究竟是啥？
先来看看它的具体内容：
``` css
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
```
没错，脸熟的人一定知道它是干啥用的，就是用来清除浮动（浮动引起父容器高度塌陷）的css样式嘛！！
在了解原理前，先了解一下content属性、伪元素和clear属性。

---
**content属性**
content 属性与 :before 及 :after 伪元素配合使用，来插入生成内容。

**说明：**
该属性用于定义元素之前或之后放置的生成内容。默认地，这往往是*行内内容*，不过该内容创建的框类型可以用属性 display 控制。

---
**CSS伪元素**
CSS 伪元素用于向某些选择器设置特殊效果。

| 属性            | 描述    |  CSS  |
| :--------:      | -----   | ----: |
| :first-letter   | 向文本的第一个字母添加特殊样式。 |    1    |
| :first-line     |  向文本的首行添加特殊样式。  |   1   |
| :before         |    	在内容元素之前添加内容。   |  2  |
| :after          |    在内容元素之后添加内容。    |  2  |


---
**clear属性**
clear 属性规定元素的哪一侧不允许其他浮动元素。不论哪一种改变，最终结果都一样，如果声明为左边或右边清除，会使元素的上外边框边界刚好在该边上浮动元素的下外边距边界之下。

可能的值：

| 值          | 描述                             |
| :--------:  | -----                            | 
| left        |  在左侧不允许浮动元素。          |  
| right       |  在右侧不允许浮动元素。          |   
| both        |  在左右两侧均不允许浮动元素。    | 
| inherit     |  规定应该从父元素继承 clear 属性的值。(IE均不支持)      |  
| none        |  默认值。允许浮动元素出现在两侧。| 


---
**2、.clearfix原理**
综上：.clearfix原理是在clearfix元素的内容之后插入空内容，通过display属性修改空内容的框类型，使其成为块级元素，最后对该块级元素使用clear属性清除浮动。

``` css
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
```

---
参考：
[理解伪元素 :Before 和 :After](http://http://www.igooda.cn/jzjl/20131009384.html)

[CSS 伪元素 (Pseudo-elements)](http://http://www.w3school.com.cn/css/css_pseudo_elements.asp)

[CSS content 属性](http://http://www.w3school.com.cn/cssref/pr_gen_content.asp)

[CSS clear 属性](http://http://www.w3school.com.cn/cssref/pr_class_clear.asp)