//创造者
function Slides($element,options){
	this.options=options
	this.$element=$element
	this.timer=null
	this.init()
}

Slides.prototype.init=function(){
	this.prepareHtml()
	this.bindEvents()
	if(this.options.auto){
		this.autoPlay()
	}
}

Slides.prototype.prepareHtml=function(){
	var current=this.current=-1
	var art=this.$element.children('.arts')
	var options=this.options
	var $element=this.$element
	$element.css({width:art.length*options.width,height:options.height,position:'relative',left:0})
}

Slides.prototype.bindEvents=function(){
	var self=this
	var $element=this.$element
	$('.menu ul li a').on('click',function(e,keepScroll){
		var options=self.options
		var timer=self.timer
		var pos=$(this).parent().prevAll('.btn').length
		$element.stop().animate({left:-options.width*pos})
		e.preventDefault();//阻止点击链接发生的默认事件
		$(this).parent().siblings().removeClass('active');//按钮背景控制
		$(this).parent().addClass('active');
		if(!keepScroll) clearInterval(timer);//自动播放暂停
		})
	var timer=this.timer=setInterval(function(){
		self.autoPlay()
        },4000)
}


Slides.prototype.autoPlay=function(){
	var current=this.current
	var options=this.options
	var $element=this.$element
	var art=this.art=this.$element.children('.arts')
	if (current>art.length-2) {current=this.current=-1};
	$element.stop().animate({left:-options.width*(current+1)})
	$('.menu ul li').eq(current+1).addClass('active').siblings().removeClass('active')
	current=this.current+=1;
}

$.fn.appleslides = function(options){
    this.each(function(){
    var element = this
    var slides = new Slides($(element),options)  
  })
}

$('.slides').appleslides({
	width:920,
	height:400,
	auto:true
})