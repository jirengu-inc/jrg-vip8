/**==navShow==**/
$.goShow = function(){

	var $nav = $('header#top-js')
	$(window).on('scroll',function(e){
		e.preventDefault();
		var offsetY = $(this).scrollTop();
		if (offsetY>=200) {
			$nav.addClass('visible');
		}else{
			$nav.removeClass('visible')
		}
	})
}
/**==gotoTop==**/
$.goShow()
$('.gotop-js').on('click',function(){
	$('body').animate({scrollTop: 0},'slow')
})