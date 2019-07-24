$(function(){
 
    $('.icon2').click(function (e) { 
      e.preventDefault();
     var slide_active = $('.active')

     if (.$('.slide3').hasClass('active')){
         $(slide_active).removeClass('active');
         $('.slide1').addClass('active');
     } else{

     $(slide_active).removeClass('active');
     $(slide_active).next().addClass('active');
  }
});
    $('.icon1').click(function (e) { 
        e.preventDefault();
        var slide_active = $('.active');
        if ($('.slide').hasClass('active')) {
            $(slide_active).removeClass('active');
            $('.slide3').addClass('active');
        } else {
            $(slide_active).removeClass('active');
            $(slide_active).pre().addClass('active');
        }
        
    });





});