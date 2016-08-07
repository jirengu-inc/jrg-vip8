(function(){
  var $width = $('.pic').width(),
      $itemSize = $('.pic').size(),
      $itemWidth = $('.pic').width(),
      $container = $('.container');

  $container.width($itemWidth * $itemSize);

  $('#photo').on('click', function(e){
    $container.animate({
      left: '-=' + $itemWidth
    });
  });

  $('#rephoto').on('click', function(e){
    $container.animate({
      left: '+=' + $itemWidth
    });
  });

  $('.help').on('touchend', function(e){
    $(this).next('.help-tip').show()
           .siblings('.help-close').show();
  });

  $('.help-close').on('touchend', function(e){
    $(this).hide()
           .prev('.help-tip').hide();
  });
})();
