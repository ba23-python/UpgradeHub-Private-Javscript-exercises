// Deberes S1 - Bucles -ej3
// Crea un bucle para conseguir dormir contando ovejas. 
//Este bucle empieza en 0 y termina en 10. 
//Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
//y cambia el mensaje en la última vuelta a 'Dormido!'.


for(let i = 0; i < 10; i++){
  if (i === 10){
    console.log('Dormido!');
  }
  else
 {console.log('Intentando dormir');
}

//La forma mas escalable es con constante que luego se puede modificar 
  /// si quiero llegar hasta 15 veces tengo que declarar una constante antes
  const sleepingCount = 15;
  for(let i = 0; i < sleepingCount; i++){
  if (i === sleepingCount){
    console.log('Dormido!');
  }
  else
 {console.log('Intentando dormir');
  }
}
