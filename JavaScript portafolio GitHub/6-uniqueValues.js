//Iteración #6: Valores únicos
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(array) {
  // Create a Set to store unique elements
  const uniqueSet = new Set(array);

  // Convert the Set back to an array
  const uniqueArray = [...uniqueSet];

  return uniqueArray;
}

// Example usage:
const result = removeDuplicates(duplicates);
console.log(result);