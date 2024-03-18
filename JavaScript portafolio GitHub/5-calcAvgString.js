//Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(param) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      sum += param[i];
      count++;
    } else if (typeof param[i] === 'string') {
      sum += param[i].length;
      count++;
    }
    // Ignore other types (e.g., boolean, objects, etc.)
  }

  if (count === 0) {
    return 0; // Avoid division by zero
  }

  return sum / count;
}

// Example usage:
const result = averageWord(mixedElements);
console.log(result);  // Output: 4.5