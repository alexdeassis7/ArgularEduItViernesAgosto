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
var foo2 = 123;
if (true) {
    var foo2_1 = 456;
}
console.log(foo2); //123
//CONTANTES 
var foo3 = 123456;
//foo3 = 59 ;//ERROR no se permite la modificacion 
console.log(foo3);
//las constantes adminte objetos literales
var foo4 = { bar: 123 };
console.log(foo4);
//foo4 = { bar : 456 };//ERROR no se permite la modificacion de objeto 
foo4.bar = 999; //Prmitido 
console.log(foo4); //  { bar : 456 }
console.log('********* TIPOS DE DATOS PRIMITIVOS ********* ');
//Boolean 
var isDone = false;
console.log('DATOS BOOLEAN');
console.log('isDone = ' + isDone);
//Number 
console.log('DATOS NUMBER');
var decimal = 6;
console.log('decimal:' + decimal);
var hex = 0xf00d;
console.log('hexadecimal : ' + hex);
var binary = 10;
console.log('binario:' + binary);
var octal = 484;
console.log('octal : ' + octal);
//String  
console.log('DATOS Cadenas de caracteres y/o texto ');
var color = "Blue";
console.log(color);
color = 'Red';
console.log(color);
console.log('Templates para concatenar strings');
var fullName = "Rocio Suarez";
var age = 21;
var sentence = "Hello , my name is " + fullName + ". I'll be " + (age + 1) + "  years old net month.";
console.log(sentence);
var sentence2 = "Hello , my name is " + fullName + "." + " I'll be " + (age + 1) + "  years old net month.";
console.log(sentence2);
