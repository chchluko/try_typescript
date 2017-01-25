function holamundo(nombre) {
    return "Bienvenido usuario:" + nombre;
}
var nombre = "Jesus Lopez";
var resultado = holamundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//variables
var nombre = "cadena de texto";
var edad = 32;
var programador = true;
var lengs = ['PHP', 'java', 'SQL'];
//se puede usar el tipo any
var namer = "cadena de texto";
etiqueta.innerHTML = nombre + ' ' + edad + ' ' + programador + ' ' + lengs;
var a = 7;
var b = 4;
if (a === 7) {
    var a_1 = 4;
}
//funciones y tipado
function devuelveNumero(num) {
    return "numero devuelto:" + num;
}
function devuelvestring(cadena) {
    if (cadena == "hola") {
        var num = 65;
    }
    else {
        num = 53;
    }
    return num;
}
alert(devuelveNumero(35));
alert(devuelvestring("hola"));
