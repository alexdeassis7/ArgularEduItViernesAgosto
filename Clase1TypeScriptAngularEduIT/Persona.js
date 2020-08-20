"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(edad, apellido, nombre, cuantosKilometros) {
        this.kilometros = cuantosKilometros;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.caminar = function () {
        console.log('estoy caminando ' + this.kilometros);
    };
    return Persona;
}());
exports.Persona = Persona;
