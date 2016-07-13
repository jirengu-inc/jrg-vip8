var loopPlayerInit = (function(){
	var $butLeft = null,
	$butRight = null,
	$butPlay = null,
	$imglist = null,
	origin = ['125px','600px'],
	imgOrigin = ['125px', '1300px'], //图片圆心点
	imgAll = createImg([['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],['img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg'],['img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg'],['img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg']]),//所有图片数组
	imgArrIndex = 0,
	imgAng = 45,
	imgTime = 300,//每张图片动画间隔时间
	rotating = false; //控制当前动画是否进行当中
	autoTimer = null, //存储自动播放定时器
	autointerval = 3000; //存储自动播放间隔时间

	function init(){
		$butLeft = $(".butLeft"),
		$butRight = $(".butRight"),
		$butPlay = $(".butPlay"),
		$imglist = $(".mainbox ul li");

		configer();//通过configer来设置所有图片的倾斜角度
		setEvent();//调用事件添加
	}

	function configer(){
		var ang = 6, //图片每次变化的角度
			aint = -6;    //图片初始化角度
		$imglist.transform({origin: origin});  //通过origin来改变图片旋转的中心点
		$imglist.each(function(i) {
			var $this = $(this);
			$this.transform({rotate:aint + (i*ang) +'deg'});
		});
	}


	function setEvent(){
		$butLeft.bind("click",function(){
			anigo(-1);

			return false;
		});
		$butRight.bind("click",function(){
			anigo(1);
			return false;
		});
		$butPlay.bind("click",function(){
			var play = "play",
			pause = "pause",
			$but = $(this);
			if($but.text()=="play"){
				$but.text(pause);
				autoGo();
			}else{
				$but.text(play);
				autoStop();
			}
			return false;
		});
	}


	function createImg(arr){         //创建图片函数
		var imgArr = [];
		for(var i in arr){
			imgArr[i]=[];
			for(var x in arr[i]){
				imgArr[i][x]=new Image();
				imgArr[i][x].src=arr[i][x];
			}
		}
		return imgArr;
	}


	function anigo(d){
		//控制连续点击
		if(rotating) return false;
		rotating = true;


		imgArrIndex += d;
		//循环播放
		if(imgArrIndex > imgAll.length-1){
			imgArrIndex = 0;
		}else if (imgArrIndex < 0) {
			imgArrIndex = imgAll.length-1;
		}

		$imglist.each(function(i) {
			var $thisItme = $(this);
			var $thisimg = $thisItme.children('img');
			var $targetImg = $(imgAll[imgArrIndex][i]);
			var thisTime = (d === 1)?imgTime*i:imgTime*($imglist.length-1-i);
			$thisItme.append($targetImg);
			$thisimg.transform({origin:imgOrigin});
			$targetImg.transform({origin:imgOrigin,rotate:(0-d) * imgAng + "deg"});
			setTimeout(function(){             //动画延时操作
				$thisimg.animate({rotate:imgAng * d+ "deg"});
				$targetImg.animate({rotate:"0deg"},500, function(){
				$thisimg.remove();
				if(thisTime ==(($imglist.length-1)*imgTime)){  //通过所有图片旋转的总耗时来控制连续点击
					rotating = false;
				}
			});
			},thisTime);

		});
	}

	function autoGo() {
		clearInterval(autoTimer);
		anigo(1);
		autoTimer = setInterval(function(){
			anigo(1);
		},autointerval);
	}

	function autoStop() {
		clearInterval(autoTimer);
	}
	return init;
})();

loopPlayerInit();