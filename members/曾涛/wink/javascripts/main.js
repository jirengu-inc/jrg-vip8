(function(){
  // $('#photo').on('click', function(e){
  //   $container.animate({
  //     left: '-=' + $itemWidth
  //   });
  // });
  //
  // $('#rephoto').on('click', function(e){
  //   $container.animate({
  //     left: '+=' + $itemWidth
  //   });
  // });

  $('.pic-one :file').on('change', function(e){
    var status = selectFileImage(this);
    if (status) {
      var picOne = $(this).parents('.pic-one')
      picOne.fadeOut(500, function(){
        picOne.siblings('.pic-two').fadeIn(500);
      })
    }
  });

  $('.help').on('touchend', function(e){
    $('.help-tip').show()
           .next().show();
  });

  $('.help-close').on('touchend', function(e){
    $(this).hide()
           .prev('.help-tip').hide();
  });

  var $female = $('.pic-two .female'),
      $male = $('.pic-two .male'),
      femaleSrc = $female.attr('src'),
      maleSrc = $male.attr('src');

  $female.on('touchend', function(e){
    if ($female.attr('src') === 'images/female.png') {
      $female.attr('src', 'images/female-2.png');
    } else {
      $female.attr('src', femaleSrc);
    }
  });

  $male.on('touchend', function(e){
    if ($male.attr('src') === 'images/male.png') {
      $male.attr('src', 'images/male-2.png');
    } else {
      $male.attr('src', maleSrc);
    }
  });
})();
