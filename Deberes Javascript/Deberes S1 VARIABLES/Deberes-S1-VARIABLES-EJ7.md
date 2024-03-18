// Deberes S1-VARIABLES-ej7

//car1 is object, car2 is object
// Dado el siguiente javascript, actualiza el valor de la variable `globalBasePrice` a 25000
//y actualiza la propiedad `finalPrice` de todos los coches con
//el valor de su propiedad `basePrice` más el valor de la variable `globalBasePrice`.

let globalBasePrice = 10000;

// del objeto car1 su FinalPrice = basePrice + globalBasePrice lo que se va a escribir de esta forma
//// car1.finalPrice = car1.basePrice + globalBasePrice;
//let globalBasePrice = 10000;

let globalBasePrice = 25000;
const car1 = {
name: 'BMW m&m',
basePrice: 50000,
finalPrice: 60000 };
const car2 = {
name: 'Chevrolet Corbina',
basePrice: 70000,
finalPrice: 80000 };

// Update the finalPrice property for each car
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

// Print the updated values
console.log('Updated globalBasePrice:', globalBasePrice);
console.log('Updated car1:', car1);
console.log('Updated car2:', car2);
