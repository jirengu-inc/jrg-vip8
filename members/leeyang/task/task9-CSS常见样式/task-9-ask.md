- CSS Sprite（雪碧图）指什么？有什么作用
CSS Sprite其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的"background-image","background-repeat","background-position"的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。

- img标签和CSS背景使用图片在使用场景上有何区别
img标签直接写在HTML代码中，因是HTML故会最先加载，HTML的图片引用解析后边下载边加载；而CSS背景使用的图片会等到页面结构加载完成后才开始加载。

- title和alt属性分别有什么作用
title属性规定关于元素的额外信息，这些信息通常会在鼠标移动到元素上时显示一段工具提示文本；alt属性是一个必须的属性，它规定在图像无法显示时的替代文本。

 - background: url(abc.png) 0 0 no-repeat;这句话是什么意思
这是background的简写属性；"url(abc.png)"是background-image属性中图片的地址；"0 0"是"background-position"属性中图片在X方向和Y方向位置的值；"no-repeat"代表的是"background-repeat"属性中，背景图片不重复。

- background-size有什么作用? 兼容性如何? 常用的值是?
background-size属性规定背景图像的尺寸；IE9+、Firefox 4+、Opera、Chrome 以及 Safari 5+ 支持 background-size 属性；常用的值有length：设置背景图像的高度和宽度，percentage：以父元素的百分比来设置背景图像的宽度和高度，cover:把背景图像扩展至足够大，以使背景图像完全覆盖背景区域，contain:把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域；

- 如何让一个div水平居中？如何让图片水平居中
1. div的margin设置为"margin:0 auto;"
2. div设置为"display:inline-block",父元素设置为"text-algin:center"
3. 先让div与其父元素同时进行左浮，然后通过相对定位使父元素向右移动50%，再对div定义相对定位，使其移动方向与父元素移动的方向相反,而其移动的值保持一致，打到水平居中的效果。

- 如何设置元素透明? 兼容性？
opacity和RGBA可是设置元素透明度；IE8 以及更早的版本支持替代的 filter 属性。例如：filter:Alpha(opacity=50)。

- opacity 和 rgba都能设置透明，有什么区别
opacity生命来设置元素的透明值，当opacity设置元素的透明值，内部的文字及元素也会透明；通过RGBA设置的颜色值只针对当前的元素，内部的文字元素的透明值并为发生变化；
