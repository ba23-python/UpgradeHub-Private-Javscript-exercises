// Completa la función que tomando dos números como argumento devuelva el más alto.
//Complete the function of taking 2 numbers as arguments to return the highest number.

let numberOne = 10;
let numberTwo = 30;
function buscaelMax(numberOne , numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  }
  else {
    return numberTwo;
  }

}

const maxNumber = buscaelMax(numberOne, numberTwo);
console.log('The highest number is:', maxNumber);


//opcion 2
return Math.max(numberOne, numberTwo)
