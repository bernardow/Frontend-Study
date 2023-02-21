$(document).ready(function(){
    const btnMenu = $('.menuHamburguer');
    const cards = $('#playlists li');
    
    $(btnMenu).click(function(){
        const sideBar = $('#sideMenu')
        $(sideBar).slideToggle();

    })

    $(cards).hover(function(e){
        $(this).find('.overlay').slideDown();
    }, function(e){
        $(this).find('.overlay').slideUp();
    })

    $('.carousel').slick({
        autoplay: true,
        arrows: false,
        draggable: false,
    })

    $('.artistCarousel').slick();
})