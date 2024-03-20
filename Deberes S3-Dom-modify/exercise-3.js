
let div$ = document.createElement ('div');
for (let index = 0; index < 6; index++) {
    const newP$ = document.createElement('p');
    div$.appendChild(newP$);
    
}
document.body.appendChild(div$);

//este bucle indica que se tiene que repetir 6 veces 
//la creacion de la constante en linea 4 (nuevo parrafo p) 
// se ha añadido al body 6 p tags vacios


