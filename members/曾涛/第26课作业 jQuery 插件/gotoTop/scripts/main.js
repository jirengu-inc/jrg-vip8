(function($) {
    // 定义滚动到顶部的方法   
    $.gotoTop = function(node, options) {
        // 默认的参数配置    
        var defaultConf = {
            inertval: 800,
            container: $(window),
            fadeTime: 'normal'
        };

        var conf = $.extend(defaultConf, options || {}),
            $node = $(node);
        // 判断用户传入的参数为DOM对象 || jQuery对象
        // jQuery对象再包装一遍会生成一个新的jQuery对象

        node.on('click', function(e) {
            $('html, body').stop(true, true).animate({
                scrollTop: 0
            }, conf.interval);
        });
        conf.container.on('scroll', function(e) {
            $(this).scrollTop() > 0 ? node.fadeIn(conf.fadeTime) : node.fadeOut(conf.fadeTime);
        });
    };
    // 定义每个item颜色的方法   
    $.changeColors = function(node, options) {
        var defaultConf = {
            colors: ['#f00', '#00f', '#0f0']
        };

        var conf = $.extend(defaultConf, options || {}),
            colorsLength = conf.colors.length,
            $node = $(node);

        node.each(function(i, e) {
            $(e).css('color', conf.colors[i % colorsLength]);
        });
    };
})(jQuery);

// 参数说明:
// 用户可以传入喜欢的颜色值
$.changeColors($('.items > li'));

// 1.用户可以传入DOM对象或者jQuery对象
// 2.可以传入一个自定义对象用来合并默认参数配置
$.gotoTop($('.btn'));