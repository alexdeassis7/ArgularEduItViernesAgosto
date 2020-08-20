import { Persona } from './Persona';


var miObjeto = new Persona(22, 'de assis', 'alex',152);
miObjeto.caminar();


console.log('Hola Mundo Edu IT');
//alert('pasamos por aqui');

//var : para variables glovales 
//let : variables locales

//VAR
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); //456

//LET
let foo2 = 123;

if (true) {
    let foo2 = 456;
}
console.log(foo2); //123

//CONTANTES 
const foo3 = 123456;
//foo3 = 59 ;//ERROR no se permite la modificacion 
console.log(foo3);
//las constantes adminte objetos literales
const foo4 = { bar: 123 };
console.log(foo4);
//foo4 = { bar : 456 };//ERROR no se permite la modificacion de objeto 
foo4.bar = 999;//Prmitido 
console.log(foo4); //  { bar : 456 }

console.log('********* TIPOS DE DATOS PRIMITIVOS ********* ')
//Boolean 
let isDone: boolean = false;
console.log('DATOS BOOLEAN');
console.log('isDone = ' + isDone);

//Number 
console.log('DATOS NUMBER')
let decimal: number = 6;
console.log('decimal:' + decimal);
let hex: number = 0xf00d;
console.log('hexadecimal : ' + hex);
let binary: number = 0b1010;
console.log('binario:' + binary);
let octal: number = 0o744;
console.log('octal : ' + octal);

//String  
console.log('DATOS Cadenas de caracteres y/o texto ');
let color: string = "Blue";
console.log(color);
color = 'Red';
console.log(color);

console.log('Templates para concatenar strings');
let fullName: string = `Rocio Suarez`;
let age: number = 21;

let sentence: string = `Hello , my name is ${fullName}. I'll be ${age + 1}  years old net month.`;
console.log(sentence);

let sentence2: string = "Hello , my name is " + fullName + "." + " I'll be " + (age + 1) + "  years old net month.";
console.log(sentence2);




