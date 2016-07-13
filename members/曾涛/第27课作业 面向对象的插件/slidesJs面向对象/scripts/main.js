function Slider(node, options) {
    // 配置默认参数   
    var defaultConf = {
        container: node,
        index: 0,
        autoPlay: true,
        interval: 1500,
        direction: 'next'
    };

    // 判断用户是否传入参数并进行参数合并
    this.config = $.extend({}, defaultConf, options || {});
    this.currentIndex = this.config.index;
    this.timer = null;

    this.init();
    this.bindEvents();
}

Slider.prototype.autoTask = function() {
    var _slider = this;
    clearInterval(this.timer);
    this.timer = setInterval(function() {
        if (_slider.config.direction === 'next') {
            _slider.go(_slider.currentIndex + 1);
        } else {
            _slider.go(_slider.currentIndex - 1);
        }
    }, _slider.config.interval);
};

Slider.prototype.init = function() {
    var $container = this.config.container,
        imgItem = this.imgItem = $container.children(),
        imgSize = imgItem.size(),
        imgWidth = this.imgWidth = imgItem.width(),
        _slider = this;

    // 给图片添加一个父容器包裹层，并且执行链式调用
    imgItem.wrapAll('<div class="slider-main"></div>')
        .addClass('slider-panel');

    var $wrap = this.$wrap = imgItem.parent('.slider-main'),
        // 创建指示器的父容器包裹层
        $sliderNav = $('<ul class="slider-nav"></ul>');

    $wrap.width(imgSize * imgWidth)
    // 创建可视区容器 
    .wrapAll('<div class="viewPoint"></div>');

    // 通过遍历图片个数创建对应的指示器
    imgItem.each(function(index) {
        $sliderNav.append($('<li class="slider-item">' + (index + 1) + '</li>'));
    });

    // 创建左箭头和右箭头
    var $prev = this.$prev = $('<a class="prev arrow"><</a>'),
        $next = this.$next = $('<a class="next arrow">></a>'),
        $viewPoint = $('.viewPoint');

    $viewPoint.append($prev)
        .append($next)
        .append($sliderNav);
    $('.slider-item:first').addClass('slider-selected');

    // 自动播放   
    if (this.config.autoPlay) {
        this.autoTask();
        // 当用户触及可视区停止自动轮播     
        $viewPoint.on('mouseenter', function(e) {
            $(this).find('a').fadeIn();
            clearInterval(_slider.timer);
            _slider.timer = null;
        }).on('mouseleave', function(e) {
            $(this).find('a').fadeOut();
            _slider.autoTask();
        });
    }

};

Slider.prototype.go = function(index) {
    var _slide = this,
        $wrap = this.$wrap,
        imgItem = this.imgItem,
        imgWidth = this.imgWidth;

    // 防止超出第一张图片和最后一张图片 
    if (index < 0) {
        index = imgItem.length - 1;
    } else if (index > 5) {
        index = 0;
    }

    // 运行动画   
    $wrap.stop(true, true).animate({
        left: index * -imgWidth
    }, function() {
        _slide.currentIndex = index;
    });

    // 指示器状态的切换   
    $('.slider-item').each(function() {
        if ($(this).index() === index) {
            $(this).addClass('slider-selected')
                .siblings('.slider-selected')
                .removeClass('slider-selected');
        }
    });
};

Slider.prototype.bindEvents = function() {
    var _slide = this;
    // 给左箭头绑定点击事件 
    this.$prev.on('click', function(e) {
        _slide.go(_slide.currentIndex - 1);
    });
    // 给右箭头绑定点击事件 
    this.$next.on('click', function(e) {
        _slide.go(_slide.currentIndex + 1);
    });
    // 通过事件代理给指示器绑定点击事件
    var child = $('.slider-nav').children().get(0).nodeName.toLowerCase();
    $('.slider-nav').on('click', child, function(e) {
        _slide.go($(this).index());
    });
};

var s1 = new Slider($('#slider'));