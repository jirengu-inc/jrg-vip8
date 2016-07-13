/**
 * Created by 郭子林 on 2016/7/11.
 */

$(function(){
    //音乐列表
    var musicList = [
        {
            name:"Stuttering.mp3",
            singer:"Fefe Dobson",
            type:"爱情",
            hurl:"http://o9udo720n.bkt.clouddn.com/Fefe%20Dobson-Stuttering.mp3",
            pic:"http://o9udo720n.bkt.clouddn.com/fefe.jpg"
        },
        {
            name:"Send My Love (To Your New Lover).mp3",
            singer:"Adele",
            type:"欧美",
            hurl:"http://o9udo720n.bkt.clouddn.com/Adele-Send%20My%20Love%20%28To%20Your%20New%20Lover%29.mp3",
            pic:"http://o9udo720n.bkt.clouddn.com/%E4%B8%8B%E8%BD%BD.jpg"
        },
        {
            name:"Akon-Right Now (Na Na Na).mp3",
            singer:"Akon",
            type:"未知",
            hurl:"http://o9udo720n.bkt.clouddn.com/Akon-Right%20Now%20%28Na%20Na%20Na%29.mp3",
            pic:"http://o9udo720n.bkt.clouddn.com/akon.jpg"
        }
    ];
//    变量初始化
    var myAudio=$('audio').get(0);//将jquery元素转换成DOM,利用DOM操作暂停/播放
    var currentIndex = 0;
    var currentTime = 0;
    var allTime = 0;
//   播放与暂停
    $('.control .pause i').on('click',function(){
        if(myAudio.paused){
            myAudio.play();
            $(this).removeClass('m-start').addClass('m-pause');
        }else{
            myAudio.pause();
            $(this).removeClass('m-pause').addClass('m-start');
        }
    })

//   获取当前时间与总时间
    function getTime(){
        currentTime = myAudio.currentTime;
        allTime = myAudio.duration;
//     当秒小于10时，将在数字秒前补0
        var remainTime =  allTime - currentTime;
        var amTime = parseInt(remainTime%60)>9?parseInt(remainTime%60):"0"+parseInt(remainTime%60);
        var remainTimeText = parseInt(remainTime/60)+":"+amTime;
//      将倒数的音乐时长放入指定的文本中
        $('.time').text(remainTimeText);
        if(currentTime == allTime){
           next();
        }
//      进度条
        var progress = currentTime/allTime;
        var $width = progress * $('.whole-time').width();
        $('.spent-time').width($width);
    }
//   鼠标在进度条上按下时音乐进度
    $('.whole-time').on('mousedown',function(e){                        //     在页面里的x坐标
        var xx = e.originalEvent.x || e.originalEvent.layerX || 0;      //    点击点的x坐标
        var _left = $(this).offset().left;                                  // 父元素的x坐标偏移
        var $left = xx - _left;
        $('.spent-time').width($left);
        var shouldTime = $left/$('.whole-time').width()*allTime;
        $('audio').prop('onplay',myAudio.currentTime=shouldTime)
    })
    //音乐src 背景图 歌手信息 等
    function playMusic(num){
        $('audio').prop('src',musicList[num].hurl);
        $('.singer-pic img').attr('src',musicList[num].pic);
        $('.song .song-name').text(musicList[num].name);
        $('.song .singer-info').text(musicList[num].singer);
        $('.song .song-type').text(musicList[num].type);
    }
    //到第几首音乐
    var go =function(index){
        if(index < 0){
            index = musicList.length - 1;
        }
        if(index > musicList.length - 1){
            index = 0;
        }
        currentIndex = index;
        playMusic(currentIndex);
        myAudio.play();
        $('.control .pause i').removeClass('m-start').addClass('m-pause');
    }
    //下一曲
    function next(){
        go(currentIndex + 1 );
    }
    //上一曲
    function prev(){
        go(currentIndex - 1 );
    }
    //上
    $('.control span i.m-prevmusic').on('click',function(){
       prev();
    })
    //下
    $('.control span i.m-nextmusic').on('click',function(){
        next();
    })
    //也main载入时 默认加载第一首音乐信息
    window.onload= playMusic(currentIndex);
    setInterval(getTime,500);

    $('.play-mode i').on('click',function(){
        $(this).addClass('actived').siblings('i').removeClass('actived');
    })
    $('.for-more span.m-shoucang').on('click',function(){
        $(this).toggleClass('shoucanged');
    })
    $('.for-more span.m-love').on('click',function(){
        $(this).toggleClass('loved');
    })


    /* 刚开始是音乐列表为json，所以弄了一个获取json长度的函数，结果改成数组用不上了
    function getJsonLength(dd){
        var jsonLength = 0;
        for (var i in dd){
            jsonLength++;
        }
        return jsonLength;
    }
    getJsonLength(musicList);*/



})
