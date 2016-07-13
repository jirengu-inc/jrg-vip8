$('.menu>li').on('mouseenter',function(e){
	var $current=$(e.currentTarget)
	var index=$current.attr('data-index')
	var indexNumber=+index
  console.log(indexNumber)
	$('.submenu').children('li.active').removeClass('active')
	$('.submenu').children('li').eq(indexNumber).addClass('active')
})

$('.productGategory').on('mouseleave',function(e){
	var $current=$(e.currentTarget)
	var index=$current.attr('data-index')
	var indexNumber=+index
	$('.submenu').children('li').removeClass('active')
})

$(function(){
      $(".artlist").slidesjs({
        width: 730,
        height: 454,
        play: {
          active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
          effect: "slide",
        // [string] Can be either "slide" or "fade".
          interval: 3000,
        // [number] Time spent on each slide in milliseconds.
          auto: true,
        // [boolean] Start playing the slideshow on load.
          swap: true,
        // [boolean] show/hide stop and play buttons
          pauseOnHover: true,
        // [boolean] pause a playing slideshow on hover
          restartDelay: 2500
        // [number] restart delay on inactive slideshow
        }
      });
    });
