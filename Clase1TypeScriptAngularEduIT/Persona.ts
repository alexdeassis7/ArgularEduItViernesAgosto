export class Persona {

    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    constructor(edad: number, apellido: string, nombre: string, cuantosKilometros: number) {
        this.kilometros = cuantosKilometros;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }


    caminar() {
        console.log('estoy caminando ' + this.kilometros);
    }


}