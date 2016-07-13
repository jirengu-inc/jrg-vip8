(function($) {
    $.fn.lazyLoad = function(options) {
        // 配置默认参数
        var defalutConf = {
            container: $(window),
            prop: 'data-src',
            timer: null
        };

        // 进行参数合并
        var conf = $.extend({}, defalutConf, options || {});
        conf.cache = [];
        this.each(function(index, imgItem) {
            var data = {
                obj: $(this),
                src: $(this).attr(conf.prop)
            };
            conf.cache.push(data);
        });

        var checkShow = function() {
            $.each(conf.cache, function(index, data) {
                if (!hasLoaded(data.obj) && isShow(data)) {
                    setTimeout(function() {
                        showImg(data.obj, data.src);
                    }, 500);
                }
            })
        };
        var isShow = function(data) {
            var container = conf.container,
                containerHeight = container.height(),
                containerTop = container.scrollTop();

            var o = data.obj,
                post = 0,
                postb = 0;

            post = o.offset().top - containerTop;
            postb = post + o.height();

            return ((post >= 0 && post < containerHeight) || (postb > 0 && postb <= containerHeight)) ? true : false;
        };
        var showImg = function(imgItem, src) {
            imgItem.attr('src', src);
            imgItem.attr('data-loaded', true);
        };
        var hasLoaded = function(imgItem) {
            if (imgItem.attr('data-loaded')) {
                return true;
            } else {
                return false;
            }
        };
        var loading = function() {
            conf.timer && clearTimeout(conf.timer);
            conf.timer = setTimeout(function() {
                checkShow();
            }, 100)
        };

        checkShow();
        // 绑定滚动条监听事件
        conf.container.on('scroll', loading);

        // 返回jQuery对象支持链式调用
        return this;
    };
})(jQuery);

$('.item img').lazyLoad();