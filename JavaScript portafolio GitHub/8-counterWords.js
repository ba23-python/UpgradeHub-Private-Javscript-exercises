
//Iteration #8: Contador de repeticiones
// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(array) {
  const wordCount = {};

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (wordCount[word]) {
      // If the word is already in the object, increment the count
      wordCount[word]++;
    } else {
      // If the word is not in the object, add it with a count of 1
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

// Example usage:
const result = repeatCounter(counterWords);
console.log(result);