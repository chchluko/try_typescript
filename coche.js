var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "Stardard Car";
        }
        else {
            this.modelo = modelo;
        }
        this.color = "BLANCO";
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche('Renault Clio'); //crea el objeto
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor("ROJO"); //le asigna un color
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
coche_dos.setColor("AZUL");
coche_tres.setColor("VERDE");
console.log('el color es ' + coche.getColor()); //Lo muestra por pantalla
console.log('La velocidad del coche es ' + coche.getVelocidad());
console.log('el Modelo es ' + coche.getModelo());
console.log('el color es ' + coche_dos.getColor());
console.log('La velocidad del coche es ' + coche_dos.getVelocidad());
console.log('el color es ' + coche_tres.getColor());
console.log('La velocidad del coche es ' + coche_tres.getVelocidad());
