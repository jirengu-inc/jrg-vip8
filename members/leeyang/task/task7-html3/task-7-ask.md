### 问答
#### 有序列表、无序列表、自定义列表如何使用？写个简单的例子。三者在语义上有什么区别？使用场景是什么？ 能否嵌套？
有序列表
```html
<ol>
    <li>apple</li>
    <li>orange</li>
</ol>
```
无序列表
```html
<ul>
    <li>book</li>
    <li>pen</li>
</ul>
```
自定义列表
```html
<dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>
    <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>
```
ul表示包含一组无顺序的列表项内容；ol表示一组有序列表项的内容，若改变列表项的顺序则会改变整体的含义；dl表示包含一组自定义
的列表项内容。内部包含1到N个子元素<dt>用于标识自定义的列表项，一个<dt>元素可对应0~N个表示定义列表项描述的<dd>元素。

可以嵌套（[DEMO](http://js.jirengu.com/dovajonizi/2/edit)）
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
<ul>
  <li>把大象放进冰箱总共需几步
    <ol>
      <li>把冰箱门打开</li>
      <li>把大象放进冰箱</li>
      <li>把冰箱门关上</li>
    </ol>
  </li>
  <li>
    <ul>最喜欢的运动
      <li>篮球</li>
      <li>骑行</li>
      <li>游泳</li>
    </ul>
  </li>
  <li>
    <dl>
      <dt>经常饮用的饮料</dt>
      <dd>茶类：红茶、绿茶、乌龙茶</dd>
      <dd>乳制品：牛奶、酸奶</dd>
    </dl>
  </li>
</ul>
</body>
</html>
```

#### 如何去除列表前面的点或者数字？
使用list-style: none;来去除

#### class 和 id 有什么区别？什么时候用 class 什么时候用 id？
class称为“类”，在CSS中用小写的"."点来选择，class在同一个html页面中可以无数次调用相同的class类，具有普遍性；ID表示着标签的
身份，在CSS中用"#"来选择，ID在页面中只能出现一次，具有唯一性。class是可重复的，所以尽量在结构内部使用，通常用于样式定义。
ID的样式优先级高于class。

#### 块级元素、行内元素是什么？有什么区别？分别对应哪些常用标签？
块级元素：显示时独自占据一行（b,td,a,img）
行内元素：行内元素会挨个排列，不会出现独占一行的情况。（h1,p,ul,table）

#### display: block、display: inline、display: inline-block分别有什么作用
display: block 元素会显示为块级元素，该元素会独占一行
display: inline 元素会显示为行内元素，不会独占一行
display: inline-block 元素即不独占一行，又可以设置其宽高属性

#### 下面代码的作用?
```html
<div id="header">
</div>

<div id="content">
    <div class="main"></div>
    <div class="aside"></div>
</div>

<div id="footer">
</div>
```
通过三个带id的div明确的划分出页面的结构，该页面分为“头部-内容-底部”布局。同时在内容内部划分两个div来明确主要内容区和
边栏区。语义化明显，方便维护与书写代码。

#### 如何理解 HTML CSS 语义化?
要机器以及人易于理解代码，方便阅读与维护。

#### form表单有什么作用？有哪些常用的input 标签，分别有什么作用？
form标签用于为用户输入创建HTML表单；
文本框：<input type="text" name="XXX">
密码框：<input type="password" name="XXX">
复选框：<input type="checkbox" name="XXX">
单选框：<input type="radio" name="XXX">

#### post 和 get 方式的区别？
GET:从指定的资源请求数据
POST:向指定的资源提交要被处理的数据

#### 在input里，name 有什么作用？
name属性规定input元素的名称。name属性用于对提交到服务器后的表单数据进行标识，或者在客户端通过JavaScript引用表单数据。
只有设置了name属性的表单元素才能在提交表单时传递他们的值。

#### <button>提交</button>、<a class="btn" href="#">提交</a>、<input type="submit" value="提交"> 三者有什么区别？
1.<button>定义了一个内容为“提交”的按钮，标签之间的内容可随意定义。
2.<a class="btn" href="#">定义了一个a链接，通过样式"btn"来定义。
3.<input type="submit" value="提交">通过在form表单中定义提交按钮，向服务器发送表单数据。

#### radio 如何 分组?
设置name属性，相同的为一组。

#### placeholder 属性有什么作用?
placeholder属性提供可描述输入字段预期值的提示信息(hint)。该提示会在输入字段为空时显示，并会在字段获得焦点时消失。

#### type=hidden隐藏域有什么作用? 举例说明
隐藏域在页面中对用户是不可见的，插入隐藏域的目的在于收集或发送信息，以利于被处理表单的程序所使用。浏览者单击发送按钮发送
表单的时候，隐藏域的信息也被一起发送到服务器。
