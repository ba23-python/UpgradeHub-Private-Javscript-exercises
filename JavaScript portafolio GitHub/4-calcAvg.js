//Calcular el promedio
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numbers) {
  let sum = sumAll(numbers);

  return sum / numbers.length;
}
console.log(average(numbers));

// Example usage:
const result = average(numbers);
console.log(result);  // Output: 20.285714285714285