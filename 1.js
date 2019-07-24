$(function () {
    // lam an the
    $('.mota').slideUp();
    $('.tieude').click(function (e) { 
        e.preventDefault();
        // lay the tiep theo r so xuong lay the slide down
        // neu dang xuong thi len ma dang len thi xuong la ham slideToggle
    $(this).next().slideToggle();
    // lam cho the body chuyen dong den vi tri cua the nay
    $('html').animate({
        scrollTop:$(this).offset().top},500);
        $(this).toggleClass('xanh');
        $('i').toggleClass('xoay');
    });
});