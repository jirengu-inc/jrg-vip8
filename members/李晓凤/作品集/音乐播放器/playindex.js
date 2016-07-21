
var myAudio=$('audio')[0]
var Audio=$('audio')
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

//下一首功能
$('.btn3').on('click',function(){
	getChannel();
	$('.btn1').removeClass('mus_play').addClass('mus_pause')
})


function getChannel(){
	$.ajax({
		url: 'http://api.jirengu.com/fm/getChannels.php',
		dataType: 'json',
		Method: 'get',
		success: function(response){
			var channels = response.channels;
			var num = Math.floor(Math.random()*channels.length);
			var channelName = channels[num].name;
			var channelId = channels[num].channel_id;
			$('.channel').text(channelName);
			$('.channel').attr('title',channelName);
			$('.channel').attr('data-id',channelId);
			getMusic();
		}
	})
}
function getMusic(){
	$.ajax({
		url: 'http://api.jirengu.com/fm/getSong.php',
		dataType: 'json',
		Method: 'get',
		data:{
			'channel':$('.channel').attr('data-id')
		},
		success:function(ret){
			var resource=ret.song[0],
			    url=resource.url,
			    bgPic=resource.picture,
			    sid=resource.sid,
			    ssid=resource.ssid,
			    title=resource.title,
			    singer=resource.artist;
			$('audio').attr('src',url);
			$('audio').attr('sid',sid);
			$('audio').attr('ssid',ssid);
			$('.songs_name').text(title);
			$('.songs_name').attr('title',title);
			$('.singer').text(singer);
			$('.singer').attr('title',singer);
			$('.bg').css({
				'background':'url('+bgPic+')',
				'background-repeat':'no-repeat',
				'background-position':'center',
				'background-size':'cover',
			})
			_play();
		}
	})
}

//进度条
function playProgress(){
var scale=myAudio.currentTime/myAudio.duration;
var progresswidth=$('.progress').width()
$('.progressbar').width(progresswidth*scale)
if(myAudio.currentTime == myAudio.duration){getChannel()}
}
if (timer!=null) {clearInterval(timer)}
var timer=setInterval(function(){
	playProgress();
},500)

//控制进度条（点击位置x坐标-进度条初始位置x坐标）/进度条总长度=用户需求进度百分比
$('.progress').on('mousedown',function(e){
	//拿到进度条初始位置x坐标（相对于窗口）
	var parentOffset=$(this).offset();
	//拿到点击位置x坐标，并减去初始位置x坐标，得到百分比
	var percPos=(e.pageX-parentOffset.left)/400;
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
$(document).ready(getChannel());
