$(document).ready(function(){
    const btnMenu = $('.menuHamburguer');

    $(btnMenu).click(function(){
        const sideBar = $('#sideMenu')
        $(sideBar).slideToggle();

    })

    $('.carousel').slick({
        autoplay: true,
        arrows: false,
        draggable: false,
    })
})