#.clearfix清除浮动的原理  
`.clearfix:after{ 
		display:block;  
		height:0;  
		content:'';  
		clear:both;}`
上面的代码利用:after伪类可以在容器中加入一个block，这个block的两边由于clear:both;两边都不能有左右浮动，其又在容器的最下方，所以他又把容器撑开了，起到了清除浮动的作用。
