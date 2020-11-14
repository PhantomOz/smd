
$('body').css("color", "white");

$('input').focus(()=>{
    $('body').toggleClass("main");
    $('.slider').toggleClass("main");
    $('.header').toggleClass("main-header");
    $('.followers').toggleClass("main-card");
    $('.updates').toggleClass("main-card");
    $('.foll-num').toggleClass("main-num");
    $('.over-num').toggleClass("main-num");
    $('.over-head').toggleClass("main-over");
    $('.attribution').toggleClass("main-over");
});