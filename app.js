$(function () {
    
    $('.item').click(function (e) { 
        e.preventDefault();
        $('.item').removeClass('active');
       $(this).addClass('active'); 
       $('body').animate({scrollTop: $('.khoi1').offset().top},1000)
    });
});
   $('.item2').click(function(e){e.preventDefault()
    $('.ite,').removeClass('active');
    $(this).addClass('active');
    $('body').animate({scrollTop:$('.khoi2').offset().top},1000)
});
});
$('.item3').click(function(e){e.preventDefault()
    $('.ite,').removeClass('active');
    $(this).addClass('active');
    $('body').animate({scrollTop:$('.khoi3').offset().top},1000)
});
});
$('.item4').click(function(e){e.preventDefault()
    $('.ite,').removeClass('active');
    $(this).addClass('active');
    $('body').animate({scrollTop:$('.khoi4').offset().top},1000)
});

});
$('.item5').click(function(e){e.preventDefault()
    $('.ite,').removeClass('active');
    $(this).addClass('active');
    $('body').animate({scrollTop:$('.khoi5').offset().top},1000)
});
});
$('.item6').click(function(e){e.preventDefault()
    $('.ite,').removeClass('active');
    $(this).addClass('active');
    $('body').animate({scrollTop:$('.khoi6').offset().top},1000)
});
