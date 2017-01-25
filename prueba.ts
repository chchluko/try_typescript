
function holamundo(nombre) {
	return "Bienvenido usuario:" +nombre;
}

var nombre = "Jesus Lopez";
var resultado = holamundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;


//variables

var nombre:string = "cadena de texto";
var edad:number = 32;
var programador:boolean = true;
var lengs:Array<string> = ['PHP', 'java', 'SQL'];

//se puede usar el tipo any

var namer:any = "cadena de texto";


etiqueta.innerHTML = nombre+ ' '+edad+' '+programador+' '+lengs;

var a =7;
var b = 4;

if(a === 7) {
	let a = 4;
}

//funciones y tipado

function devuelveNumero(num:number):string{ //recibe un numero devuelve una cadena
	return "numero devuelto:"+num;
}

function devuelvestring(cadena:string):number{  //recibe una cadena devuelve un numero
	if(cadena == "hola" ) {
		var num = 65;
	}else{
		num = 53;
	}
	return num;
}


alert (devuelveNumero(35));
alert (devuelvestring("hola"));