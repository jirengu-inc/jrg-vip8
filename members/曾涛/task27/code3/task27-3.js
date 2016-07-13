function Slider(node, options) {
    // 配置默认参数
    var defaultConf = {
        container: node,
        index: 0,
        autoPlay: true,
        interval: 1500,
        direction: 'next',
        isAnimate: false
    };

    // 判断用户是否传入参数并进行参数合并
    this.config = $.extend({}, defaultConf, options || {});

    // 将需要使用的参数提前获取出来   
    this.container = this.config.container;
    this.currentIndex = this.config.index > 5 ? 0 : this.config.index;
    this.timer = null;

    // 调用方法
    this.init();
    this.bindEvent();
}

Slider.prototype.autoPlay = function () {
    // _self指向Slider这个类，其作用是当作用域改变时this的值不改变   
    var _self = this;

    clearInterval(this.timer);
    this.timer = setInterval(function () {
        // 判断参数里的方向     
        if (_self.config.direction === 'next') {
            _self.next();
        } else {
            _self.prev();
        }
    }, _self.config.interval);
};

Slider.prototype.init = function () {
    var $container = this.container,
            $links = $container.children('a'),
          $imgItem = this.$imgItem = $container.find('img'),
           imgSize = this.imgSize = $imgItem.size(),
          imgWidth = this.imgWidth = $imgItem.width(),
            $extra = $('<div class="slider-extra"></div>'),
             _self = this;

    // 创建无序列表元素   
    $links.wrap('<li class="slider-panel"></li>');

    var $li = this.$li = $container.find('.slider-panel');
    $li.wrapAll($('<ul class="slider-main"></ul>'));

    var $list = this.$list = $('.slider-main');

    // 克隆图片的第一张和最后一张，实现无缝滚动的效果
    $('.slider-main').prepend($li.last().clone())
                     .append($li.first().clone());

    imgRealSize = $('.slider-main').children().size();
    $list.width(imgWidth * imgRealSize)
         .css('left', -imgWidth);

    // 创建指示器的父容器和箭头的父容器
    var $sliderExtra = $('<div class="slider-extra"></div>'),
       $arrowWrapper = $('<div class="slider-page"></div>'),
          $indicator = this.$indicator = $('<ul class="slider-nav"></ul>');

    // 通过遍历图片个数创建对应的指示器
    $imgItem.each(function (index, elem) {
        $indicator.append($('<li class="slider-item">' + (index + 1) + '</li>'));
    });

    // 创建左箭头和右箭头
    var $prev = $('<a class="slider-prev arrow">' + '<' + '</a>'),
        $next = $('<a class="slider-next arrow">' + '>' + '</a>');

    // 追加对应的dom节点   
    $arrowWrapper.append($prev)
                 .append($next);

    $sliderExtra.append($indicator)
                .append($arrowWrapper);

    $container.append($sliderExtra);

    // 索引为index的指示器显示成第一个     
    var $indicatorItem = this.$indicatorItem = $container.find('.slider-item');
    $indicatorItem.eq(this.currentIndex)
                  .addClass('slider-selected');

    // 自动播放
    if (this.config.autoPlay) {
        this.autoPlay();
        $container.on('mouseenter', function (e) {
            $prev.stop(true, true).fadeIn();
            $next.stop(true, true).fadeIn();
            clearInterval(_self.timer);
        }).on('mouseleave', function (e) {
            $prev.stop(true, true).fadeOut();
            $next.stop(true, true).fadeOut();
            _self.autoPlay();
        });
    }
};

Slider.prototype.next = function (index) {
    var _self = this,
        index = index || 1;

    // 防止用户进行恶意点击   
    if (this.config.isAnimate) return;
    this.config.isAnimate = true;

    this.$list.animate({
        left: '-=' + (_self.imgWidth * index)
    }, 600, function () {
        _self.currentIndex = (_self.currentIndex + index) % _self.imgSize;
        // 判断图片是否为第一张
        if (_self.currentIndex === 0) {
            _self.$list.css('left', -_self.imgWidth);
        }
        _self.config.isAnimate = false;
        _self.setIndicator();
    });

};

Slider.prototype.prev = function (index) {
    var _self = this,
        index = index || 1;

    if (this.config.isAnimate) return;
    this.config.isAnimate = true;

    this.$list.animate({
        left: '+=' + (_self.imgWidth * index)
    }, 600, function () {
        _self.currentIndex = (_self.imgSize + _self.currentIndex - index) % _self.imgSize;
        // 判断图片是否为最后一张
        if (_self.currentIndex === _self.imgSize - 1) {
            _self.$list.css('left', -_self.imgWidth * _self.imgSize);
        }
        _self.config.isAnimate = false;
        _self.setsetIndicator();
    });
};

Slider.prototype.setIndicator = function () {
    var _self = this;
    _self.$indicatorItem.eq(_self.currentIndex)
         .addClass('slider-selected')
         .siblings().removeClass('slider-selected');
};

Slider.prototype.bindEvent = function () {
    // 箭头必须是this.container的后代元素，这样有多个轮播图同时执行时互相不会影响 
    var prev = this.container.find($('.slider-prev')),
        next = this.container.find($('.slider-next')),
       _self = this;

    // 给右箭头绑定点击事件   
    next.on('click', function (e) {
        _self.next();
    });

    // 给左箭头绑定点击事件   
    prev.on('click', function (e) {
        _self.prev();
    });

    // 通过事件委托为指示器绑定点击事件
    var childName = this.$indicator.children().get(0).nodeName.toLowerCase();
    this.$indicator.on('click', childName, function (e) {
        var idx = $(this).index();
        if (idx > _self.currentIndex) {
            _self.next(idx - _self.currentIndex);
        } else if (idx < _self.currentIndex) {
            _self.prev(_self.currentIndex - idx);
        }
    });
};

var test = new Slider($('.slider'));