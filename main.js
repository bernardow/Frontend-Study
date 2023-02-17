$(document).ready(function(){
    $('#imgCarousel').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
})