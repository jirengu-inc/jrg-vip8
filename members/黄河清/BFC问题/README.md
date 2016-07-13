## inline-block、BFC
1.在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？<br>
2.去除inline-block内缝隙有哪几种常见方法?<br>
3.父容器使用overflow: auto| hidden撑开高度的原理是什么？<br>
4.BFC是什么？如何形成BFC，有什么作用?<br>
5.浮动导致的父容器高度塌陷指什么？为什么会产生？有几种解决方法<br>
6.以下代码每一行的作用是什么？ 为什么会产生作用？ 和BFC撑开空间有什么区别？<br>
```css
.clearfix:after{
    content: '';
    display: block;
    clear: both;
}
.clearfix{
    *zoom: 1;
}
```