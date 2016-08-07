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
})();
