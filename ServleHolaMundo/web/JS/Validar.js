function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function validarp(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /^[a-zA-Z ]*$/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
//function validarc(e) {
  //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(e)){
   //alert("La dirección de email " + e + " es correcta.");
  //} else {
   //alert("La dirección de email es incorrecta.");
  //}
//}
