$(function () {
   'use strict'
    // On Scroll Method Start

    $(document).on('scroll', function(){
      var windowSize = $(window).scrollTop();

      // Back To Top Button Start

      if(windowSize > 500){
         $('#goTop').css({
            bottom: '40px',
            opacity: 1
         });
      }
      else{
         $('#goTop').css({
            bottom: '500px',
            opacity: 0
         });
      }

      // Back To Top Button End

      // Menu Drop Animation Start

       if(windowSize > 60){
         $('#header').addClass('menu_animation');
      }
      else{
         $('#header').removeClass('menu_animation');
      };

      // Menu Drop Animation End

   });

   // On Scroll Method End

   // On Click Menthod on Back To Top Button Start

   $('#goTop').on('click', function(){
      $('html, body').animate({
         scrollTop: 0
      }, 500);
   });

   $('.counterup').counterUp();

   // On Click Menthod on Back To Top Button End

  // Countdown Plugin Activation Start

  $('.count_down').countdown('2022/7/10', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<div class="count_down_item"><span>%D</span><span>days</span></div>'
     + '<div class="count_down_item"><span>%H</span><span>hrs</span></div>'
     + '<div class="count_down_item"><span>%M</span><span>mins</span></div>'
     + '<div class="count_down_item"><span>%S</span><span>secs</span></div>'));
 });
 // Countdown Plugin Activation End
 
 $('.banner_slider').slick({
   prevArrow:'<i class="fas fa-arrow-left banner_slider_arrow"></i>',
   nextArrow: '<i class="fas fa-arrow-right banner_slider_arrow"></i>',
   dots: true,
   dotsClass:'banner_slider_dots'
 });



})
