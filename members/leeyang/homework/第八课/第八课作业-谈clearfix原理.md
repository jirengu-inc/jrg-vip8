### 浅谈.clearfix的原理

.clearfix的作用是清除浮动，写之前呢我们先介绍下之前最常用的另一种清除浮动的方法,通过对比来介绍.clearfix的原理。

之前我们最常用清除浮动的方法是这个样子：
```html
.clear{clear:both;}
```
配合[DEMO](http://js.jirengu.com/gagemetumu/2/edit)更易理解
我们拿导航栏为例，当li元素浮动时，ul的边框无法包裹li。
```html
li{float: left;border: 1px solid green;}
ul{border: 1px solid red;}
```
![](http://ww3.sinaimg.cn/large/bd3d5249gw1f2nxyyqn9sj20cs039q33.jpg)
这是因为**浮动会导致元素脱离文档流**，也就是导致ul的边框无法包裹li的原因。

然后我们通过在li后面添加一个空的class为"testclear"的div，在样式里面我们把它清除浮动，这样这个div前面或者后面的li就会受到
清除浮动的影响，包裹在ul的边框内部，达到我们想要的效果。
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
<ul>
  <li>导航1</li>
  <li>导航2</li>
  <li>导航3</li>
  <li>导航4</li>
  <li>导航5</li>
  <div class="testclear"></div>
</ul>
</body>
</html>
```

```html
/*CSS reset */
*{margin:0;padding:0;}
ul{list-style: none;}

/*样式*/
.testclear{clear:both;}


li{float: left;border: 1px solid green;}
ul{border: 1px solid red;}
```

![](http://ww3.sinaimg.cn/large/bd3d5249gw1f2nybft9hlj20co03pmxb.jpg)

---
#### clearfix
通过刚才我们得知的**浮动会导致元素脱离文档流**，就不难理解clearfix。
[DEMO](http://js.jirengu.com/celibafama/2/edit)
上面的原理是通过一个空的div来清除浮动，但是这样做会导致一些问题。就是每次清除浮动的时候都需要增加一个空标签来使用，增加了页面
无用标签，不利于页面的优化。
clearfix的好处就是不需要增加空标签，直接在有浮动的外层加上这个样式就可以了。
我们为ul添加clearfix这个类，下面我们只需要操作这个类就可以了。
```html
.clearfix:after{
  content: '';/*内容为空*/
  display: block;/*块级元素*/
  clear: both;/*清除浮动*/
}
```
通过代码我们不难理解，clearfix是通过创建一个内容为空的块级元素并清除前后浮动来达到我们需要的效果。原理上和上面的方法基本类似，
我们里面的"content + display"可以看做成上面方法中的div一样。但是这样做的好处就是避免了我们上述讲到的问题，使得代码看起来更加优雅和简介。也方便其他地方调用来清除浮动。