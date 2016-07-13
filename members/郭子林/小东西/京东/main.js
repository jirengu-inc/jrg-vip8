/**
 * Created by 郭子林 on 2016/6/13.
 */
$(function(){
    //类目：滑过大类显示小类
    $(".allproducts ul li").on("mouseenter",function(){
        var _index = $(this).index();
        $('.submenus > li.active').removeClass('active');
        $('.submenus > li').eq(_index).addClass('active');
        $(".allproducts").on("mouseleave",function(){
            $('.submenus > li.active').removeClass('active');
        })
    })
    //中间广告大轮播，引用别人的插件
    $(".artlist").slidesjs({
        width: 730,
        height: 454,
        start: 1,
        navigation: {
            active: true,
            // [boolean] Generates next and previous buttons.
            // You can set to false and use your own buttons.
            // User defined buttons must have the following:
            // previous button: class="slidesjs-previous slidesjs-navigation"
            // next button: class="slidesjs-next slidesjs-navigation"
            effect: "slide"
            // [string] Can be either "slide" or "fade".
        },
        play: {
            active: true,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
            effect: "fade",
            // [string] Can be either "slide" or "fade".
            interval: 2000,
            // [number] Time spent on each slide in milliseconds.
            auto: true,
            // [boolean] Start playing the slideshow on load.
            swap: false,
            // [boolean] show/hide stop and play buttons
            pauseOnHover: true,
            // [boolean] pause a playing slideshow on hover
            restartDelay: 2500
            // [number] restart delay on inactive slideshow
        }
    });
//    商品楼层分布：鼠标滑过
    $(".floor-head .cats li").on("mouseenter",function(){
        if($(this).children("actived")){
            //alert(1)
        }
        var _num = $(this).index();
        //alert(_num)
    })
})