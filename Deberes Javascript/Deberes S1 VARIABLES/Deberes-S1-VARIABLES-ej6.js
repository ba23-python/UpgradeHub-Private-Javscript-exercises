// Deberes S1-VARIABLES-ej6
//Dado el siguiente javascript, imprime con un ``console.log`` la suma del precio de ambos juguetes.


const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);
console.log('La suma del precio de ambos juguetes es:' + (toy1.price + toy2.price));

// Si quiero añadir frase: La suma de los 2 es: y la suma, tengo que crear const variable adicional
//Opcion 1 es poner en parentesis la suma delos 2 precios para que JS entienda que los tiene que sumar
// console.log('la suma del precio de ambos juguetes es:' + (toy1.price + toy2.price));