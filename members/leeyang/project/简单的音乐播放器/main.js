$(function(){
	//曲目列表
	var musicList = [
		{
			name:"玫瑰与小鹿",
			singer:"周深",
			type:"华语",
			hurl:"http://7xsj4k.com1.z0.glb.clouddn.com/player/music/%E5%91%A8%E6%B7%B1%20-%20%E7%8E%AB%E7%91%B0%E4%B8%8E%E5%B0%8F%E9%B9%BF.mp3",
			pic:"http://7xsj4k.com1.z0.glb.clouddn.com/player/jpg/%E5%B0%8F%E9%B9%BF%E4%B8%8E%E7%8E%AB%E7%91%B0.jpg"
		},
		{
			name:"小幸运",
			singer:"金玟岐",
			type:"爱情",
			hurl:"http://7xsj4k.com1.z0.glb.clouddn.com/player/music/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E5%B0%8F%E5%B9%B8%E8%BF%90%EF%BC%88Cover%20%E7%94%B0%E9%A6%A5%E7%94%84%EF%BC%89.mp3",
			pic:"http://7xsj4k.com1.z0.glb.clouddn.com/player/jpg/%E5%B0%8F%E5%B9%B8%E8%BF%90.jpg"
		},
		{
			name:"Are you ok?",
			singer:"雷军",
			type:"鬼畜",
			hurl:"http://7xsj4k.com1.z0.glb.clouddn.com/player/music/%E9%9B%B7%E5%86%9B%20-%20Are%20You%20OK.mp3",
			pic:"http://7xsj4k.com1.z0.glb.clouddn.com/player/jpg/are%20you%20ok.jpg"
		},
		{
			name:"东京不太热",
			singer:"洛天依",
			type:"娱乐",
			hurl:"http://7xsj4k.com1.z0.glb.clouddn.com/player/music/%E6%B4%9B%E5%A4%A9%E4%BE%9D%20-%20%E4%B8%9C%E4%BA%AC%E4%B8%8D%E5%A4%AA%E7%83%AD.mp3",
			pic:"http://7xsj4k.com1.z0.glb.clouddn.com/player/jpg/%E4%B8%9C%E4%BA%AC%E4%B8%8D%E5%A4%AA%E7%83%AD.jpg"
		},
		{
			name:"普通Disco",
			singer:"洛天依-言和",
			type:"娱乐",
			hurl:"http://7xsj4k.com1.z0.glb.clouddn.com/player/music/%E6%B4%9B%E5%A4%A9%E4%BE%9D,%E8%A8%80%E5%92%8C,ilem%20-%20%E6%99%AE%E9%80%9ADISCO.mp3",
			pic:"http://7xsj4k.com1.z0.glb.clouddn.com/player/jpg/%E6%99%AE%E9%80%9ADisco.jpg"
		},
		{
			name:"牵丝戏",
			singer:"西瓜君-王胖子",
			type:"古风",
			hurl:"http://7xsj4k.com1.z0.glb.clouddn.com/player/music/%E8%A5%BF%E7%93%9CJUN,%E7%8E%8B%E8%83%96%E5%AD%90%20-%20%E7%89%B5%E4%B8%9D%E6%88%8F.mp3",
			pic:"http://7xsj4k.com1.z0.glb.clouddn.com/player/jpg/%E7%89%B5%E4%B8%9D%E6%88%8F.jpg"
		},
		{
			name:"认真的雪",
			singer:"薛之谦",
			type:"华语",
			hurl:"http://7xsj4k.com1.z0.glb.clouddn.com/player/music/%E8%96%9B%E4%B9%8B%E8%B0%A6%20-%20%E8%AE%A4%E7%9C%9F%E7%9A%84%E9%9B%AA.mp3",
			pic:"http://7xsj4k.com1.z0.glb.clouddn.com/player/jpg/%E8%AE%A4%E7%9C%9F%E7%9A%84%E9%9B%AA.jpg"
		}
	];

//init
	var myAudio = $('audio').get(0);
	var currentIndex = 0;
	var currentTime = 0;
	var allTime = 0;

	//播放、暂停
	$('.button .pause i').on('click',function(){
		if(myAudio.paused){
			myAudio.play();
			$(this).removeClass('music-start').addClass('music-pause');
		}else{
			myAudio.pause();
			$(this).removeClass('music-pause').addClass('music-start');
		}
	})


	//获取当前时间与全部时间
	function getTime(){
		currentTime = myAudio.currentTime;
		allTime = myAudio.duration;
		//秒小于10时，在数字前补0
		var remainTime = allTime - currentTime;
		var amTime = parseInt(remainTime%60)>9?parseInt(remainTime%60):"0"+parseInt(remainTime%60);
		var remainTimeText = parseInt(remainTime/60)+":"+amTime;
		//显示剩余播放时长
		$('.time').text(remainTimeText);
		if(currentTime == allTime) {
			next();
		}
		//进度条
		var progress = currentTime/ allTime;
		var $width = progress * $('.full-time').width();
		$('.wasting-time').width($width);
	}

	//鼠标拖动时的进度
	$('.full-time').on('mousedown',function(e){          //页面里的x坐标
		var xx = e.originalEvent.x || e.originalEvent.layerX || 0;    //点击点的X坐标
		var _left = $(this).offset().left;
		var $left = xx - _left;
		$('.wasting-time').width($left);
		var shouldTime = $left/$('.full-time').width()*allTime;
		$('audio').prop('onplay', myAudio.currentTime=shouldTime)
	})

	//音乐信息
	function playMusic(num){
		$('audio').prop('src', musicList[num].hurl);
		$('.singer img').attr('src', musicList[num].pic);
		$('.music .music-name').text(musicList[num].name);
		$('.music .singer-info').text(musicList[num].singer);
		$('.music .music-type').text(musicList[num].type);
	}

	//到第几首音乐
	var go = function(index){
		if(index < 0){
			index = musicList.length - 1;
		}
		if(index > musicList.length - 1) {
			index = 0;
		}
		currentIndex = index;
		playMusic(currentIndex);
		myAudio.play();
		$('.button .pause i').removeClass('music-start').addClass('music-pause');
	}

	//下一首
	function next() {
		go(currentIndex + 1);
	}

	//上一首
	function prev() {
		go(currentIndex - 1);
	}

	$('.music-previous').on('click',function(){
		prev();
	})

	$('.music-next').on('click',function(){
		next();
	})

	//默认加载第一首音乐信息
	window.onload = playMusic(currentIndex);
	setInterval(getTime,500);
	$('.play-order i').on('click',function(){
		$(this).addClass('actived').siblings('i').removeClass('actived');
	})
	$('.more .music-collect').on('click',function(){
		$(this).toggleClass('collect');
	})
	$('.more .music-like').on('click',function(){
		$(this).toggleClass('like');
	})

})