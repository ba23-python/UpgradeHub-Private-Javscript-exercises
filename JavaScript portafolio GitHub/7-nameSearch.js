//Iteración #7: Buscador de nombres
//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:



const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(array, value) {
  const index = array.indexOf(value);
  const isFound = index !== -1;

  return {
    found: isFound,
    position: isFound ? index : undefined
  };
}

// Example usage:
const result1 = finderName(nameFinder, 'Tony');
console.log(result1);  // Output: { found: true, position: 2 }

const result2 = finderName(nameFinder, 'Wolverine');
console.log(result2);  // Output: { found: false, position: undefined }