// Dado el siguiente html usa querySelector para mostrar por consola el botón con la clase .showme

//OPCION 1 sin $ , el dolar se pone para que te distingue que es un NODO

let button = document.querySelector('.showme');
        console.log(button);

//OPCION 2 CON $ , el dolar se pone para que te distingue que es un NODO

let button$ = document.querySelector('.showme');
        console.log(button$);

//opcion 3 sin creacion de variable button
console.log(document.querySelector('.showme'));