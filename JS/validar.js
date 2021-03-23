function validar(formulario){
    /*Queremos validar que se escriban mas de 5 caracteres
    en el campo nombre */
    if(formulario.nombre.value.length < 5){
        alert("Por favor escribe más de 5 caracteres en el campo Nombre");
        formulario.nombre.focus();
    return false;
    }

    /*Validar para que sólo sean letras */
    var checkOk = "QWERTYUIOPÑLKJHGFDSAZXCVBNM" + "qwertyuiopñlkjhgfdsazxcvbnm";
    var checkStr = formulario.nombre.value;
    var allValid = true;
    
    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;

        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }
    if(!allValid){
        alert("Escribe solo LETRAS en el campo NOMBRE");
        formulario.nombre.focus();
        return false;
    }

    var checkOk = "0123456789";
    var checkStr = formulario.edad.value;
    var allValid = true;
    
    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;

        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }
    if(!allValid){
        alert("Escribe solo NÚMEROS en el campo EDAD");
        formulario.edad.focus();
        return false;
    }
    /*Validar email
    expresiones regulares
    a poder diferenciar una cadena de caracteres
    y definir que caracteres son válidas de acuerdo
    a una condicion */

    var txt = formulario.email.value;
    //Expresión regular
    //algo@algo.com
    //algo@algo.algo.com
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    alert("Email" + (b.test(txt)?"":" no") + " valido");
    return b.test(txt);
}