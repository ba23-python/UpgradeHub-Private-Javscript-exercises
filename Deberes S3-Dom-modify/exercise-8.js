

const p$$ = document.createElement('p');
p$$.textContent = 'Voy en medio!'

const secondDiv$$ = document.querySelectorAll('div:nth-child(2)');
document.body.insertBefore(p$$, secondDiv$$);


//opcion mas escalable
//let p$ = document.createElement('p');
// p$.textContent = 'Voy de miedo';
// let secondDiv$ = document.querySelector('div:nth-child(2)');
// secondDiv$.parentNode.insertBefore(p$, secondDiv$);

// Crear un nuevo elemento <p>
//const newParagraph = document.createElement('p');

// Establecer el contenido HTML interno del elemento <p>
//newParagraph.innerHTML = 'Voy en medio!';

// Obtener el primer elemento <div>
//const firstDiv = document.querySelector('div:first-child');

// Insertar el elemento <p> antes del segundo elemento <div>
//firstDiv.parentNode.insertBefore(newParagraph, firstDiv.nextSibling);
