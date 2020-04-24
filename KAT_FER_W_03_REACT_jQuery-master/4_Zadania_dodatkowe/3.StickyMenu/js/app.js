$(function () {

var nav = $('nav');
var menu = $('.menu');
var top = menu.position().top;
// let menuPosition = menu.css('position');


  $(window).on('scroll', function () {

      let scrollDistance = $(document).scrollTop();

      if (scrollDistance >= top) {
          menu.addClass('sticky');
      }
      else { menu.removeClass('sticky');}

  });

  $(window).on('resize', function () {

      if (!menu.hasClass('sticky')){
          scrollDistance = nav.scrollTop();
      }
  })

});