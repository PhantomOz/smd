// $('body').css("background-color", "#1D2029");
$('body').css("color", "white");
// $('.followers').css("background-color", "#252B43");
// $('.updates').css("background-color", "#252B43");

$('input').focus(()=>{
    $('body').toggleClass("main");
    $('.slider').toggleClass("main");
    $('.header').toggleClass("main-header");
    $('.followers').toggleClass("main-card");
    $('.updates').toggleClass("main-card");
    $('.foll-num').toggleClass("main-num");
    $('.over-num').toggleClass("main-num");
    $('.over-head').toggleClass("main-over");
});