
var myAudio=$('audio')[0]
var Audio=$('audio')
var currentSrcindex=0
var sourcelist=$('source')
var currentSrc=""
//播放、暂停函数
var _play=function(){
	myAudio.play();
	$('.btn1').removeClass('mus_play').addClass('mus_pause')
}
var _pause=function(){
	myAudio.pause();
	$('.btn1').removeClass('mus_pause').addClass('mus_play')
}
//播放、暂停控制
$('.btn1').on('click',function(){
	if(myAudio.paused){
		_play();
	}else{
		_pause();
	}
})

//下一首、上一首功能
$('.btn2').on('click',function(){
	prev();
	$('.btn1').removeClass('mus_play').addClass('mus_pause')
})

$('.btn3').on('click',function(){
	next();
	$('.btn1').removeClass('mus_play').addClass('mus_pause')
})
function prev(){
	change(currentSrcindex-1);
}
function next(){
	change(currentSrcindex+1);
}
var change=function(index){
	if (index<0) {index=sourcelist.length-1};
	if (index>sourcelist.length-1){index=0};
	currentSrc=$('source').eq(index).prop("src");
	var title = $("source").eq(index).prop("title").split(/-/);
	console.log(title[1])
	$('.songs_name').text(title[1]);
	$('.singer').text(title[0]);
	$('.channel').text(title[1]);
	myAudio.src=currentSrc;
	myAudio.play();
	$('.bg').children().eq(index).addClass('show_bg').removeClass('hide_bg').siblings().addClass('hide_bg').removeClass('show_bg')
	currentSrcindex=index;
}
//进度条
function playProgress(){
var scale=myAudio.currentTime/myAudio.duration;
var progresswidth=$('.progress').width()
$('.progressbar').width(progresswidth*scale)
if(myAudio.currentTime == myAudio.duration){next()}
}
if (timer!=null) {clearInterval(timer)}
var timer=setInterval(function(){
	playProgress();
},500)

//控制进度条（点击位置x坐标-进度条初始位置x坐标）/进度条总长度=用户需求进度百分比
$('.progress').on('mousedown',function(e){
	//拿到进度条初始位置x坐标（相对于窗口）
	var parentoffset=$(this).offset();
	//拿到点击位置x坐标，并减去初始位置x坐标，得到百分比
	var percPos=(e.pageX-parentoffset.left)/400;
	//得到用户要求时间。
	myAudio.currentTime=myAudio.duration*percPos;
})

//时间样式函数
function secondsTimes(s){
	var m=Math.floor(s/60);
	s-=m*60;
	return (m<10?'0'+m:m)+":"+(s<10?'0'+s:s)
}
//时间更新
Audio.on('timeupdate',function(){
	var songLength = secondsTimes(this.duration)
	var songLengthParse = songLength.split(".")[0];
	$('.time-finish').html(songLengthParse);

	var songCurrent = secondsTimes(this.currentTime)
	var songCurrentParse = songCurrent.split(".")[0];
	$('.time-now').html(songCurrentParse);
	$('progress').attr("value", this.currentTime / this.duration);
})

