$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideToggle();
    })

    $('#btnCancel').click(function(){
        $('form').slideUp(600);
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoImagemNova = $('#enderecoImagemNova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
        $(`<div class="overlay-imgLink> 
            <a target="_blank" title="Ver imagem em tamanho real" href="${enderecoImagemNova}" </a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#enderecoImagemNova').val('');
    })
})
