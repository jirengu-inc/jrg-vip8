(function($) {
    $.accordion = function(node) {
        var child = node.children().get(0).nodeName.toLowerCase();
        node.on('click', child, function(e) {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                $(this).addClass('selected')
                    .siblings('.selected')
                    .removeClass('selected');
            }
        });
    };
})(jQuery);

$.accordion($('.items'));