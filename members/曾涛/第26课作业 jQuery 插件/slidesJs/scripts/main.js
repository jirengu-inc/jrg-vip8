(function($) {
    $.slides = function(node, options) {
        // 默认参数配置     
        var defaultConf = {
            duration: 'slow',
            interval: 1500,
            autoPlay: {
                dir: 'next'
            },
            timer: null,
            number: 0
        };

        // 合并参数配置     
        var conf = $.extend(defaultConf, options || {}),
            // 获取图片的个数和单张图片的宽度     
            imgItem = node.children(),
            imgLength = imgItem.length,
            imgWidth = imgItem.width();

        // 为图片列表包裹父容器并设置宽度     
        imgItem.addClass('slider-panel')
            .wrapAll('<div class="slider-main"></div>')
            .each(function(index, elem) {
                $(this).attr({
                    'data-index': index
                });
            });
        var $list = node.children();
        $list.width(imgLength * imgWidth);
        // 创建可视区容器     
        $list.wrapAll('<div class="viewPoint"></div>');

        // 创建左箭头和右箭头    
        var $prev = $('<a href="##" class="prev arrow"><</a>'),
            $next = $('<a href="##" class="next arrow">></a>'),
            $viewPoint = $('.viewPoint');
        $list.after($prev).after($next);

        // 通过遍历图片的个数创建指示器     
        imgItem.each(function(index, elem) {
            $('.viewPoint').append($('<li class="slider-item" data-index="' + index + '">' + (index + 1) + '</li>'));
        });
        $('.slider-item').wrapAll('<ul class="slider-nav"></ul>')
            .first().addClass('slider-selected');
        var $sliderNav = $('.slider-nav'),
            $sliderItem = $('.slider-nav').children();

        // 实现图片滚动    
        var go = function(index) {
            if (index > 5) {
                index = 0;
            } else if (index < 0) {
                index = imgSize - 1;
            }
            $list.stop(true, true).animate({
                left: (index) * -imgWidth
            }, function() {
                conf.number = index;
            });
            $sliderItem.each(function() {
                if ($(this).index() === index) {
                    $(this).addClass('slider-selected')
                        .siblings('.slider-selected')
                        .removeClass('slider-selected');
                }
            });
        };

        // 实现图片向左滑动
        $next.on('click', function(e) {
            go(conf.number + 1);
        });

        // 实现图片向右滑动
        $prev.on('click', function(e) {
            go(conf.number - 1);
        });

        // 实现自动轮播    
        var auto = function() {
            clearInterval(conf.timer);
            conf.timer = setInterval(function() {
                if (conf.autoPlay.dir === 'next') {
                    go(conf.number + 1);
                } else if (conf.autoPlay.dir === 'prev') {
                    go(conf.number - 1);
                }
            }, conf.interval);
        };
        auto();

        // 当用户触及可视区停止自动轮播     
        $viewPoint.on('mouseenter', function() {
            clearInterval(conf.timer);
            $('.arrow').fadeIn();
        }).on('mouseleave', function() {
            auto();
            $('.arrow').fadeOut();
        });

        // 通过事件代理为指示器绑定点击事件     
        $sliderNav.on('click', 'li', function(e) {
            $(this).addClass('slider-selected')
                .siblings('.slider-selected')
                .removeClass('slider-selected');
            var currentIndex = $(this).index();
            go(currentIndex);
        });
    };
})(jQuery);

$.slides($('#slider'));