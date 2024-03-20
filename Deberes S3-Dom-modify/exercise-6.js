const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


        // Creo un nuevo UL elemento
        const ul$ = document.createElement('ul');

        // Voy recorriendo el apps array y creo li elementos a traves de for loop
        //le doy index 0 para que empiece de la primera posicion del array, la condicion que vaya por todos los 5 en este caso, pero el array pueda tener cualquier longitud
        for (let i = 0; i < apps.length; i++) {
            // le digo que Crea un nuevo li element por cada app del apps
            const li$ = document.createElement('li');
            
            // Asigna el text content del li elemento al app que toca 
            li$.textContent = apps[i];
            
            // Añade al ul elemento un nuevo hijo 
            ul$.appendChild(li$);
        }

        // Añade el ul elemento al body del HTML document
        document.body.appendChild(ul$);

        //Imprime lista li asi
        // º Facebook 
        //º Netflix 
        //º Instagram 
        //º Snapchat 
        //º Twitter