//Deberes S1 extra- ej1
// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios 
//que sean menor de edad precedidos del texto "Usuario menor de edad:" 
//y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuario mayor de edad:".

const users = [
  {name: "Abel", years: 43},
  {name: "Maria", years: 18},
  {name: "Pedro", years: 14},
  {name: "Samantha", years: 32},
  {name: "Raquel", years: 16}
];

for (let index = 0; index < users.length; index++) {
  const user = users[index];
  if (user.years >= 18) {
    console.log('Usuario mayor de edad: ' + user.name);
  } else {
    console.log('Usuario menor de edad: ' + user.name);
  }
}


// Adicional, si el usuario se llama Abel, imprime Que majo eres, en las demas ocasiones, imprime 'Seguid aprendiendo'
const users = [
    {name: "Abel", years: 43}, 
    {name: "Maria", years: 18}, 
    {name: "Pedro", years: 14}, 
    {name: "Samantha", years: 32}, 
    {name: "Raquel", years: 16}
];


for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if(element.name === "Abel"){
        console.log('¡Que majo eres!')
    } else {
      console.log ('¡Seguid aprendiendo! ')
    }
}
