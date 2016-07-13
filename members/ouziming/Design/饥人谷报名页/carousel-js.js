/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-12 11:32:05
 * @version $Id$
 */

     var phoneWidth =  parseInt(window.screen.width);
     var phoneScale = phoneWidth/640;
     var ua = navigator.userAgent;
     if (/Android (\d+\.\d+)/.test(ua)){
               var version = parseFloat(RegExp.$1);
               if(version>2.3){
                        document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
               }else{
                        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
               }
     } else {
               document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
     }




		var $ct = $('.img-ct'),
            $items = $ct.children(),
            $pre = $('.pre'),
            $next = $('.next'),
            $bullet = $('.bullet'),
        imgWidth = $items.width(),
        imgCount = $ct.children().size();

        $ct.prepend($items.last().clone()),
        $ct.append($items.first().clone()),
        imgRealCount=$ct.children().size(),
        $ct.css({left:0-imgWidth,width:imgRealCount*imgWidth});

        var curIdx = 0;
        var isAnimate = false;

        $next.on('click',function(){
            playNext();
        });

        $pre.on('click',function(){
            playPre();
        });

        $bullet.find('li').on('click',function(){
            var idx = $(this).index()
            if(idx > curIdx){
                playNext(idx-curIdx)
            }else if(idx < curIdx){
                playPre(curIdx-idx)
            }
        });


        //function stopAuto(){clearIntervel(clock)}

        function autoPlay(){
            clock = setInterval(function(){
                playNext();
            },3000);
        }//自动轮播

        autoPlay();

        function playNext(idx){
            var idx = idx||1;
            if(!isAnimate){
                isAnimate = true;
                $ct.animate({left:"-="+(imgWidth+idx)},function(){
                    curIdx=(curIdx+idx)%imgCount;
                    if(curIdx===0){
                        $ct.css({left:0-imgWidth});
                    }
                    isAnimate = false;
                    setBullet();
                })
            }
        }

        function playPre(idx){
            var idx = idx||1;
            if(!isAnimate){
                isAnimate = true;
                $ct.animate({left:"+="+(imgWidth+idx)},function(){
                    curIdx=(imgCount+curIdx-idx)%imgCount;
                    if(curIdx===(imgCount-1)){
                        $ct.css({left:0-imgWidth*imgCount});
                    }
                    isAnimate = false;
                    setBullet();
                })
            }
        }

        function setBullet(){
            $bullet.find('li').removeClass("active");
            $bullet.find('li').eq(curIdx).addClass('active');
        }
        setBullet()
