//Validar solo numeros
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

//Validar solo palabras y espcacions

function validarp(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /^[a-zA-Z ]*$/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validarc(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;
    var patron = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/; 
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
} 