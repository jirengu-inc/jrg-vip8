
function scroll (){
	var beforeScrollTop = document.body.scrollTop;
	var down = function(){
		$(window).scroll(function() {
			// console.log('1');
			$('.wrapper').css({
				width: '970px;',
				padding: '5px',
				margin: '0 auto',
				background: 'white'
			});
		});
	}

	var up = function(){
		$(window).scroll(function() {
			// console.log('1');
			$('.wrapper').css({
				width: '970px;',
				padding: '34px 0px 26px',
				background: 'white',
				margin: '0 auto',
				background: 'white'
			});
		});
	}

	window.addEventListener("scroll",function(){
		var afterScrollTop = document.body.scrollTop,
		delta = afterScrollTop - beforeScrollTop;
		if(delta > 0) {
			// console.log("xia");
			down();
		}else{
			// console.log("shang");
			up();
		}
	})
}

scroll();