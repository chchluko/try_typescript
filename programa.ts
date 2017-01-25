module Tienda{
	export class Ropa{
		constructor(public titulo: string){
			alert(titulo);
		}
	}
	export class Informatica{
		constructor(public titulo: string) {
			alert("tienda de tecnologia:"+titulo);
		}
	}
}

import Informatica = Tienda.Informatica;
let cargar_informatica = new Informatica("Ebay");



function arranque(lanzar:string){
	return function(target:Function){
		target.prototype.lanzamiento = function(): void{
			alert(lanzar);
		}
	}
}

@arranque('Lanzamiento de programa')
class Programa{
	public nombre:string;
	public version:number;

	setNombre(nombre:string){
		this.nombre = nombre;
	}
	setVersion(version:number){
		this.version = version;
	}
	getNombre(){
		return this.nombre;
	}
	getVersion(){
		return this.version;
	}
}

var programa = new Programa();
programa.lanzamiento();

class EditorVideo extends Programa{  //clase con erencia
	public timeline:number;
	setTimeline(timeline:number){
		this.timeline = timeline;
	}
	getTimeline(){
		return this.timeline;
	}
	getAllData(){
		return this.getNombre()+" - "+this.getVersion()+" - "+this.getTimeline();
	}	
}

var editor = new EditorVideo();

editor.setNombre("Camtasia");
editor.setVersion(5);
editor.setTimeline(4000);

console.log(editor.getAllData());

//LOGICA DEL PROGRAMA

var programas = [];

function guardar(){
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();
	programa.setNombre(nombre);
	programa.setVersion(1);

	programas.push(programa);

	var list = "";
	for (var i = 0; i < programas.length; i++) {
		list = list+"<li>"+programas[i].getNombre()+"</li>";
	}
	var listado = <HTMLElement> document.getElementById("listado");
	listado.innerHTML = list;
}



setInterval(( param, prueba ) => {  //funciones de flecha, se retira el nombre funcion de la variable
	console.log('hola');
}, 1000);


var frutas = [
	'manzana',
	'naranja',
	'platano',
	'piña'
];

var recorrer = frutas.map(fruta => {
	console.log(fruta);
	console.log(fruta.length);
});





