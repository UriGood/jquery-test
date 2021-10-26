$(document).ready(function () {

    // $('h1').html('Etiqueta h1');
    // $('.display-4').html('desde clase');
    // $('#idh1').html('desde identificador');  

    // $('.container h1.display-4').html('Desde container con h1')

    // $('#idh1').addClass('text-danger');
    // $('#idh1').removeClass('display-4');

    // $('#contenido').append('<h1>Este es un elemento al final </h1>');
    // $('#contenido').prepend('<h1>Este es un elemento al principio </h1>');
    // $('#color-azul').css({color:'blue', background:'salmon',padding:'20px'});

    // // $('#color-azul').remove(); 
    // $('#color-azul').hide(); 

    // $('img').attr('src','https://codeorigin.jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-succinctly.jpg');
    // $('img:last').attr('width','100px');

    // var parrafo = $('#resultado p')
    // $('.btn-primary').click(function(){
    //     parrafo.addClass('display-4');
    // })
    // $('.btn-danger').click(function(){
    //     parrafo.removeClass('display-4');
    // })
    // $('.btn-warning').click(function(){
    //     parrafo.toggleClass('display-4');
    // })
    // $('#formulario').submit(function(evento){
    //     evento.preventDefault();
    //     var nombre = $('#idnombre').val();
    //     console.log(nombre);
    //     $('.display-4').html(nombre);
    // });


    var resultado = $('#resultado')
    // $('.btn-primary').click(function () {
    //     resultado.fadeOut(1000);
    // })
    $('.btn-primary').on('click',function(){
        resultado.fadeOut(1000);
    });
    $('.btn-danger').click(function () {
        resultado.fadeIn(1000);
    })
    $('.btn-warning').click(function () {
        resultado.toggle(1000);
    })
    $('.btn-success').click(function () {
        resultado.animate({
            left: '250px',
            opacity: '0.5',
            height: '+=150',
            width: '+=150',
        }, 3000, function () {
            resultado.animate({
                left: '0px',
                opacity: '1',
                height: '-=150',
                width: '-=150',
            },3000)
        });
    })
});
