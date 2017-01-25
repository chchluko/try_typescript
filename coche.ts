interface cocheBase{  //se define la interface
	getModelo():string; //metodos obligatorias
	getVelocidad():number;
}

class Coche implements cocheBase{   // se crea la clase
	public color:string;  //atributos
	public modelo:string;
	public velocidad:number;

	constructor(modelo:any = null){
		this.velocidad=0;
		if( modelo == null) {
			this.modelo="Stardard Car";
		}else{
			this.modelo=modelo;
		}
			this.color="BLANCO";
	}

	public getModelo(){    //metodo get del atributo modelo
		return this.modelo;
	}

	public setModelo(modelo: string){ //metodo set modelo 
		this.modelo = modelo;
	}

	public getColor(){    //metodo get del atributo color
		return this.color;
	}

	public setColor(color: string){ //metodo set color 
		this.color = color;
	}

	public acelerar(){ //metodo acelerar
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}

	public getVelocidad(){ 
		return this.velocidad;
	}

}

var coche = new Coche('Renault Clio');  //crea el objeto
var coche_dos = new Coche();
var coche_tres = new Coche();

coche.setColor("ROJO");   //le asigna un color
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
coche_dos.setColor("AZUL");
coche_tres.setColor("VERDE");

console.log ('el color es '+coche.getColor());  //Lo muestra por pantalla
console.log ('La velocidad del coche es '+coche.getVelocidad());
console.log ('el Modelo es '+coche.getModelo()); 
console.log ('el color es '+coche_dos.getColor());
console.log ('La velocidad del coche es '+coche_dos.getVelocidad());
console.log ('el color es '+coche_tres.getColor());
console.log ('La velocidad del coche es '+coche_tres.getVelocidad());