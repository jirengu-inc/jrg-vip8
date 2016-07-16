/**
 * Created by 非也 on 2016/7/16.
 */
/*
$(function(){
    $(".i-bf").ready(function(){
        $('.i-zt').hide();
    });
    $(".i-bf").on('click',function(){
        $('.i-bf').hide();
        $('.i-zt').show();
    });
    $('.i-zt').on('click',function(){
        $('.i-zt').hide();
        $('.i-bf').show();
    });
    $(".i-fx").click(function(){
        $(this).css("color","#415266");
    });
    $(".i-sc").click(function(){
        $(this).css("color","yellow");
    });
    $(".i-ax").click(function(){
        $(this).css("color","#FE8698");
    });
    $(".i-xh").click(function(){
        $(this).css("color","#415266");
        if($('.i-sj').css("color","#415266")){
            $('.i-sj').css("color","#CDD2D7")
        }
    });
    $(".i-sj").click(function(){
        $(this).css("color","#415266");
        if($('.i-xh').css("color","#415266")){
            $('.i-xh').css("color","#CDD2D7")
        }
    });
});
$.fn.musicPlay=function(){
    var current = 0;
    var $pics = $('.list> img');
    var x = document.getElementById("myAudio");
    function playAudio(){
        x.play();
    };
    function pauseAudio(){
        x.pause();
        x.load();
    };
    var go = function(index){
        if(index<0){
            index = $pics.length-1;
        }else if(index>$pics.length-1){
            index=0;
        }
        var top = index *(-100);
        $('.list').stop(true,true).animate({top:top},function(){
            current = index;
        });
    };
    var prev = function(){
        go(current-1);
    };
    var next = function(){
        go(current+1);
    };
    $( ".song-name" ).text( $('audio >source').attr('src'));
    $( ".singer" ).text($('audio >source').attr('title'));
    $('.i-bf').on('click',function(){
        playAudio();
        $('.i-sys').on('click',function(){
            prev();
        });
        $('.i-xys').on('click',function(){
            next();
        });
    });
    $('.i-zt').on('click',function(){
        pauseAudio()
    });
};
$('.music').musicPlay();
*/

$(function() {
    var audio = document.getElementById("myAudio");
    var current =0 ;
    var $pics = $('source');
    console.log(audio);
    !function someclick() {
        // Button cilick
        $(".i-bf").ready(function () {
            $('.i-zt').hide();
            message();
        }).on('click', function () {
            $('.i-zt').show();
            $('.i-bf').hide();
            Play();
        });
        //icon click
        $(".i-zt").on('click', function () {
            $('.i-bf').show();
            $('.i-zt').hide();
            Pause();
        });
        $(".i-fx").click(function () {
            $(this).css("color", "#415266");
        });
        $(".i-sc").click(function () {
            $(this).css("color", "yellow");
        });
        $(".i-ax").click(function () {
            $(this).css("color", "#FE8698");
        });
        $(".i-xh").click(function () {
            $(this).css("color", "#415266");
            if ($('.i-sj').css("color", "#415266")) {
                $('.i-sj').css("color", "#CDD2D7")
            }
        });
        $(".i-sj").click(function () {
            $(this).css("color", "#415266");
            if ($('.i-xh').css("color", "#415266")) {
                $('.i-xh').css("color", "#CDD2D7")
            }
        });
    }();

    !function mainclick(){
        $('.i-sys').on('click',function(){
            prev();
        });
        $('.i-xys').on('click',function(){
            next();
        });
    }();
    function message(){
        var world = $('source').eq(current).attr('src');
        var art =  $('source').eq(current).attr('title');
        $('.song-name').text(world);
        $('.singer').text(art);
    };
    function go(index){

        if(index<0){
            index = $pics.length-1;
        }else if(index>$pics.length-1){
            index=0;
        }
        message();
        var top = index *(-100);
        $('.list').stop(true,true).animate({top:top},function(){
            current = index;
        });
        $('source').eq(current).animate(function(){
            Play();
        });
    };
    function prev(){
        go(current-1);
    };
     function next(){
        go(current+1);
    };
    function Play() {
        audio.play();
        TimeSpan();
    } //Play()
    function Pause() {
        audio.pause();
    } //Pause()

    function TimeSpan() {
        var processnow = 0;
        setInterval(function () {
            var ProcessNow = (audio.currentTime / audio.duration) * 240;
            $(".processnow").css("width", ProcessNow);
            var currentTime = timeFormat(audio.currentTime);
            var timeAll = timeFormat(TimeAll());
            $(".song-time").html(currentTime + " | " + timeAll);
        }, 1000);
    }  //TimeSpan()

    function timeFormat(number) {
        var minute = parseInt(number / 60);
        var second = parseInt(number % 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;
    } //timeFormat()
    function TimeAll() {
        return audio.duration;
    } //TimeAll()
});