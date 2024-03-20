

// Recogeme todos los elementos con clase .fn-remove-me
       let elementsToRemove$ = document.querySelectorAll('.fn-remove-me');

       // Reitera por cada elemento del DOM y quitalos del DOM usando for...of loop
       for (let element$ of elementsToRemove$) {
           element$.remove();
       }

       //imprime solo los p tags con NO ME ELIMINES!