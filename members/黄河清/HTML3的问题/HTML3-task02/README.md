## 代码练习

1.给box加个边框 1px, #ccc。<br>
2.给header设置高度40px, 左对齐，左内边距10px, 文字16px, 颜色#f00,下边框#ccc 1px。<br>
3.给content 设置高度100px,内部 a链接去掉下划线，颜色 blue, 鼠标放置上去后颜色变为 red。<br>
4.给footer设置高度50px，内部 btn设置 边框1px #ccc, 圆角3px, 上下内边距4px,左右内边距3px，显示为inline-block, footer哪居中显示;。<br>

代码如下：
```html
<div class="box">
    <div class="header">
      <h3>我是标题</h3>
      <a class="close" title="关闭" href="#">X</a>
    </div>
    <div class="content">
          <h3>欢迎来到  <a href="http://jirengu.com">饥人谷</a></h3>
          <p> 在这个大家庭你能快乐的学到更多前端技能</p>
    </div>
        <div class="footer">
            <a class="btn btn-cancel" href="">取消</a>
            <a class="btn btn-confirm" href="">确认</a>
        </div>
  </div>
```