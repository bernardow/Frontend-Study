$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideToggle();
    })

    $('#btnCancel').click(function(){
        $('form').slideUp(600);
    })

    $('form').on('submit', function(e){
        e.preventDefault();
    })
})
