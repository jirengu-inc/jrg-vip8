#.clearfix原理

by 饥人谷-李晓凤
***
####为什么外层元素不能被**撑开**？
当一个内层元素是浮动的时候，如果没有关闭浮动，其父元素也就不会再包含这个浮动的内层元素，因为此时浮动元素已经脱离了文档流。也就是为什么外层不能被撑开了！
####如何清除浮动？
> 方法一：添加新的元素 、应用 clear：both
HTML:
` <div class="outer">
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
    <div class="clear"></div>
</div> `
CSS:
`clear{clear:both; height: 0; line-height: 0; font-size: 0}`
通过新添加一个子元素.clear来清除浮动，优点是容易理解，缺点是在html和css文档中都要添加代码。
# 
> 方法二：父级div定义 overflow: hidden，触发BFC
HTML：
`<div class="outer overflow"> //这里添加了一个class
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
    <!--<div class="clear"></div>-->
</div>`
CSS：
`.over-flow{overflow: hidden; zoom: 1;} /*zoom: 1; 是在处理兼容性问题*/`
该方法优点在于不用添加新元素，通过触发父级元素BFC，实现清除浮动的效果。
# 
> 方法三： :before 方法：（注意：作用于浮动元素的父亲）
HTML:
` <div class="clearfix">
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
    <div class="clear"></div>
</div> `
CSS：
`.clearfix {zoom:1;}    /*==for IE6/7 Maxthon2==*/
.clearfix :before {content:'';display:block;clear:both;} `
该方法优点是不需多于的标签，而且也能很好的兼容。
####.clearfix原理解释
方法三便是我们需要解释原理的方法，.clearfix利用:before来在元素内部插入1个元素块，从面达到清除浮动的效果。
其实现原理类似于clear:both方法，只是区别在于:clear在html插入一个div.clear标签，而clearfix利用其伪类clearfix:before在元素内部增加一个类似于div.clear的效果。




