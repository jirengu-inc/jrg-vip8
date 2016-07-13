var   $art = $('.course-slide')
      $viewpoint = $('.viewpoint'),
        $pics = $viewpoint.children(),
        $pre = $('.pre'),
        $next = $('.next'),
        $bullet = $('.bullet'),
        imgWidth = $pics.width(),
        imgCount = $viewpoint.children().size();
        //.length 和 .size() 的效果一样

    //绑定事件
      var curIdx = 0; //当前显示的pics
      var isAnimate = false;
      $pre.on('click',function(idx){
        playPre();
      });
      $next.on('click',function(idx){
        playNext();
      });
      $bullet.find('li').on('click',function(){
        var idx = $(this).index();
        console.log(idx)
        play(idx);
      });

      play(0);
      autoPlay();

      $art.on('mouseenter',function(){
        stopAuto()
      }).on('mouseleave',function(){
        autoPlay()
      })
    //绑定事件
      function playPre(){
        play((imgCount+curIdx-1)%imgCount);
        //这里加imgCount是为了再保证nowIdx不为负值的同时,也不会影响取余;
      }
      function playNext(){
        play((curIdx+1)%imgCount);
      }
      function play(idx){
        if (isAnimate) {return;}
        isAnimate = true;
        $pics.eq(curIdx).fadeOut(500);
        $pics.eq(idx).fadeIn(500,function(){
          isAnimate = false;
        });
        curIdx = idx;
        setBullet();
      }
      function setBullet(){
        $bullet.children().removeClass('active')
                  .eq(curIdx).addClass('active');
      }
      //停止自动播放
      function stopAuto(){
        clearInterval(clock);
      }
      function autoPlay(){
        clock = setInterval(function(){
          playNext();
        },2000)
      }