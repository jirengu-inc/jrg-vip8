/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-26 15:43:53
 * @version $Id$
 */

var $hb = $('.carousel'),//hb就是墙板
	$items = $hb.children(),
	$pre = $('.pre'),
	$next = $('.next'),
	$bullet = $('.bullet'),
	imgWidth = $items.width(),
	imgcount = $items.size();
var curIdx=0;
var clock;
	//console.log($item)
	
$hb.prepend($items.last().clone());/*将最后的一个图片克隆放最前*/
$hb.append($items.first().clone());/*将最前的那张图片克隆放最后*/

imgRealcount = $hb.children().size(); 
//console.log(imgRealcount)

$hb.css({left:0-imgWidth, width:imgRealcount*imgWidth});

$next.on('click',function(e){
	step(-730)
	//console.log(e.target)
	//console.log(e.currentTarget)
});

$pre.on('click',function(){
	step(730)
});

function autoPlay(){//自动轮播
	clock=setInterval(function(){
		step(-730)
	},2000);
};
autoPlay()

function stopAuto(){//停止轮播
	clearInterval(clock);
};
//stopAuto()


$hb.mouseover(function(){//鼠标移入停止播放
	stopAuto()
});

$hb.mouseout(function(){//鼠标移出自动播放
	autoPlay()
});

var hb = $hb[0];//把js变回DOM
//console.log(hb.style.left)

function step(offset){
  	var newLeft = parseInt(hb.style.left) + offset; //style是DOM的API,jq实例化是 对象.css("left")
  	
  	hb.style.left = newLeft + 'px'

	if(newLeft < -4380){
		hb.style.left = -730 + 'px'
	}
	if(newLeft > -730){
		hb.style.left = -4380 + 'px'
	}
}

