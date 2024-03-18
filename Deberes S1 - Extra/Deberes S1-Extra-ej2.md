//Deberes S1 extra- ej2
//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
//```js
//const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
//const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
// se utilizan metodos de Arrays
// In this JavaScript code, the line `food.name = fruits.length === 0 ? 'No comes' : fruits.shift();`is used to assign a value to the`name`property of each object in the`foodSchedule` array based on certain conditions. Let's break down this line and discuss scalability in both English and Spanish:

//English:
//- `fruits.length === 0 ? 'No comes' : fruits.shift();`: This is a conditional (ternary) operator. It checks if the length of the `fruits` array is equal to 0. If it is, it assigns the string `'No comes'` to the `name` property of the current `food` object. Otherwise, it removes and returns the first element of the `fruits` array using the `shift()` method, and assigns it to the `name` property of the current `food` object.

//Scalability:
//- This approach can be scalable because it dynamically assigns values to the `name` property of each `food` object based on the availability of fruits. If there are no fruits available (`fruits.length === 0`), it assigns a generic message `'No comes'`. Otherwise, it assigns the name of the fruit, ensuring that each food item has a unique name. This scalability ensures that the code can adapt to changes in the availability of fruits without the need for manual adjustments.

//Spanish:
//- `fruits.length === 0 ? 'No comes' : fruits.shift();`: Este es un operador condicional (ternario). Comprueba si la longitud del array `fruits` es igual a 0. Si lo es, asigna la cadena `'No comes'` a la propiedad `name` del objeto `food` actual. De lo contrario, elimina y devuelve el primer elemento del array `fruits` utilizando el método `shift()`, y lo asigna a la propiedad `name` del objeto `food` actual.

//Escalabilidad:
// Este enfoque puede ser escalable porque asigna dinámicamente valores a la propiedad `name` de cada objeto `food` según la disponibilidad de frutas. Si no hay frutas disponibles (`fruits.length === 0`), asigna un mensaje genérico `'No comes'`. De lo contrario, asigna el nombre de la fruta, asegurando que cada elemento de comida tenga un nombre único. Esta escalabilidad garantiza que el código pueda adaptarse a cambios en la disponibilidad de frutas sin necesidad de ajustes manuales.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
for (let food of foodSchedule){
if(!food.isVegan){
food.name = fruits.length === 0 ? 'No comes' : fruits.shift(); //si no queda mas fruta para reemplazar, salta mensaje 'No comes'
food.isVegan = true;
}
}
console.log(foodSchedule);
