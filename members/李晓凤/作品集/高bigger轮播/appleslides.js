
$.fn.appleslides=function(options){
//设置.slides宽度
var arts=$('.arts')
console.log(arts.length)
$('.slides').css({width:arts.length*options.width,height:options.height,position:'relative',left:0})

//点击轮播功能
$('.menu ul li a').on('click',function(e,keepScroll){
	var pos=$(this).parent().prevAll('.btn').length
	$('.slides').stop().animate({left:-options.width*pos})
	e.preventDefault();//阻止点击链接发生的默认事件
	$(this).parent().siblings().removeClass('active');//按钮背景控制
	$(this).parent().addClass('active');
	if(!keepScroll) clearInterval(timer);//自动播放暂停
})
//自动播放功能
var current=0;
function autoplay(){
	if (current>arts.length-2) {current=-1};
	$('.slides').stop().animate({left:-options.width*(current+1)})
	$('.menu ul li').eq(current+1).addClass('active').siblings().removeClass('active')
	current+=1;
}
var timer=setInterval(function(){
	autoplay()
},4000)

}

$('.slides').appleslides({
	width:920,
	height:400,
	auto:true
})