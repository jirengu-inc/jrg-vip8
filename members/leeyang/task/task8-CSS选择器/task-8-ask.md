# 任务8-CSS选择器
### 问答
- CSS选择器常见的有几种？
1. 类型（Type）选择器
```html
h1 {
  color: #ff0000;
}/*所有类型为h1的元素，字体颜色设置为"#ff0000"*/
```
2. 后代（Descendant）选择器
当一段HTML被2个以上的选择器包围时，可以用这些选择器的阶层关系，选择到正确的HTML
![](http://ww4.sinaimg.cn/large/bd3d5249jw1f32yi1o4s4j20le08cab5.jpg)

3. class选择器
在CSS中，用.表示class
![](http://ww4.sinaimg.cn/large/bd3d5249jw1f32yk68y07j20le08d3zi.jpg)

4. ID选择器
在CSS中，用#表示ID
![](http://ww1.sinaimg.cn/large/bd3d5249jw1f32ylb9j80j20le08cq43.jpg)

5. 伪类(Pseudo Classes)选择器
无法在HTML中看到这些标签，但是会通过滑动鼠标的动作或状态的改变显示出来
![](http://ww1.sinaimg.cn/large/bd3d5249jw1f32yntrekoj20le08c0tz.jpg)

6. 通配符(Universal)选择器
使用通配符“*”，代表整张网页都要使用\*{}里面的设定
![](http://ww3.sinaimg.cn/large/bd3d5249jw1f32yqloj9qj20le08c75d.jpg)

7. 子(Child)选择器
与后代选择器的差别：子选择器中间不能插入其他HTML标签，后代选择器则可以
![](http://ww1.sinaimg.cn/large/bd3d5249jw1f32yuvnfeaj20lf08c0to.jpg)

- 选择器的优先级是怎样的？
1. important声明
2. ID选择器
3. 类选择器
4. 伪类选择器
5. 属性选择器
6. 标签选择器
7. 伪类选择器
8. 通配符选择器

- class和id的使用场景？
1. class指定标签的类名，把一些特定样式放到一个class类中，需要此样式的标签，可以在添加此类。
2. id指定标签的唯一标识，根据提供的唯一id号，快速获取标签对象。

- 使用CSS选择器时为什么要划定适当的命名空间
可以使选择器仅匹配特定命名空间下的元素，只对特定的区块生效。

- 以下选择器分别是什么意思？
```html
#header{
} /*为id属性的值为header的标签设置样式*/
.header{
}/*为class属性的值为header的标签设置样式*/
.header .logo{
}/*为class属性的值为header的元素的所有后代的class属性的值为logo的元素设置样式*/
.header.mobile{
}/*为class属性的值既是header又是mobile的元素设置样式*/
.header p, .header h3{
}/*为class属性的值是header的元素的所有后代的class属性的值是p和h3的元素设置样式*/
#header .nav>li{
}/*为id属性的值是header的元素的所有后代的class属性的值为nav的子元素为li的元素设置样式*/
#header a:hover{
}/*为id属性的值为header的元素的所有后代的a标签元素设置鼠标移入样式*/
```

- 列出你知道的伪类选择器
:link 用于选取未被访问的链接
:visited 用于选取已被访问的链接
:hover 用于选择鼠标指针浮动在上面的元素
:active 用于激活点击的链接
:focus 用于选取获得焦点的元素
:first-child 用于选取属于其父元素的首个子元素的指定选择器
:before 在被选元素的内容前面插入内容
:after 在被选元素的内容后面插入内容

- :first-child和:first-of-type的作用和区别
:first-child 匹配的是某父元素的第一个子元素，可以说是结构上的第一个子元素。
:first-of-type 匹配的是某父元素下相同类型子元素中的第一个。

- text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中
作用是让文本水平居中。作用在块级元素，表格单元格以及通过display拥有块级元素特性或表格特性的行内元素上。

- 如果遇到一个属性想知道兼容性，在哪查看?
caniuse.com