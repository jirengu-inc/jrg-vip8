!function(){
	$(window).scroll(function() {
		var beforeScrollTop = document.body.scrollTop;
		var down = function(){
			$('#wrapper').addClass('wrapperheader').removeClass('wrapper');
		};
		var up = function(){
			$('#wrapper').addClass('wrapper').removeClass('wrapperheader');
		};

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
	});
}()