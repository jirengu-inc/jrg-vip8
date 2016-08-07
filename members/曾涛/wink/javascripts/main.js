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

  $('.help').on('click', function(e){
    $(this).next('.help-tip').show(500)
           .siblings('.help-close').show(500);
  });
})();
