$(function () {
    $('.bl').click(function (e) { 
        e.preventDefault();
        $('.bl').removeClass('active');
        $(this).addClass('active');


  var loc = $(this).data('loc');

  $('li.chialayer').each(function (index, element) {
      // element == this

      if ($(this).hasClass(loc)){
         $(this).show(400);
      } else {
          $(this).hide(400);
      }
    });
});




});