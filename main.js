$(document).ready(function(){
    $('#imgCarousel').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(11) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.'
        },
        submitHandles: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validator){
            let camposIncorretos = validator.numberOfInvalids();
            console.log(camposIncorretos)
        }
    })

    $('.veiculosList button').click(function(){
        const destino = $('#contact');

        const carroInteresse = $(this).parent().find('h3').text()

        $('#veiculo').val(carroInteresse)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})