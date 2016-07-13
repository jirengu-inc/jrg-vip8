/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-21 14:02:57
 * @version $Id$
 */
 $(document).ready(function(){
	
    var $ct = $(".ct") ;
    var $children = $ct.children("li");
    var $prev = $(".prev");
    var $next = $(".next");
    var $bullet = $(".bullet");
    var length = $children.size();
    var imgWidth = $ct.children("li").width();

    var cur = 0;
    var isAnimate =true;//全局变量状态锁，允许执行自动播放的功能
    $ct.css({left:0,width:length*imgWidth});

    $next.on("click",function (e) {
        e.preventDefault();
        stop();
        playNext();
        autoPlay();
    });
    $prev.on("click",function (e) {
        e.preventDefault();
        stop();
        playPrev();
        autoPlay();
    });
    $bullet.find("li").on("mouseenter",function () {
        stop();
        var index = $(this).index();
        if (index>cur){
            playNext(index-cur);
        }
        else if(index<cur){
            playPrev(cur-index);
        }
        autoPlay();
    });
    function  playNext (idx) {
        var idx = idx || 1; //移动图片的数量
        if(isAnimate){
            isAnimate = false;
            cur = (cur + idx)%length;
            for(var i=0;i<idx;i++){
                $ct.animate({left :-(imgWidth)},function () {
                        $ct.append($ct.children().first());
                        $ct.css({left:0});
                })
            }
            isAnimate = true;
            setBullet();
            }
    }
    function  playPrev (idx) {
        var idx = idx || 1; //移动图片数的数量
        if(isAnimate){
            isAnimate = false;
            cur = (length+cur-idx)%length;
            for(var i=0;i<idx;i++){
                $ct.css({left:-imgWidth});
                $ct.prepend($ct.children().last());
                $ct.animate({left : 0})
            }
            isAnimate = true;
            setBullet();
            }
    }
    function setBullet() {//给相应bullet的li元素加上背景色
        $bullet.children().removeClass("active").eq(cur).addClass("active");
    }
    function autoPlay (){//自动播放
        start = setInterval(function () { //编号start为全局变量，不然的话stop函数找不到这个编号了
            playNext();
        },2000)
    }
    function stop() {//停止自动播放功能
        clearInterval(start);
    }
    autoPlay();



});

