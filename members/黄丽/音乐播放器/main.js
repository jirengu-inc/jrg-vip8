/**
 * Created by 非也 on 2016/7/16.
 */

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


