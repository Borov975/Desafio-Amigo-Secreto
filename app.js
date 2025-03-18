// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 

 

// Función para agregar amigos al array 

function agregarAmigo() { 

    // Obtener el valor del campo de texto 

    let amigoInput = document.getElementById('amigo').value; 

 

    // Validar que el campo no esté vacío 

    if (amigoInput.trim() === "") { 

        alert("Por favor, ingrese un nombre válido."); 

        return; 

    } 

 

    // Añadir el nombre al array 

    amigos.push(amigoInput); 

 

    // Limpiar el campo de entrada 

    document.getElementById('amigo').value = ""; 

 

    // Actualizar la lista de amigos en la interfaz 

    mostrarAmigos(); 

} 

 

// Función para mostrar la lista de amigos en el HTML 

function mostrarAmigos() { 

    // Obtener el elemento de la lista 

    let listaAmigos = document.getElementById('listaAmigos'); 

 

    // Limpiar la lista existente para evitar duplicados 

    listaAmigos.innerHTML = ""; 

 

    // Recorrer el array de amigos y añadir cada nombre a la lista 

    amigos.forEach(function(amigo) { 

        let li = document.createElement('li'); // Crear un elemento <li> 

        li.textContent = amigo; // Asignar el nombre al <li> 

        listaAmigos.appendChild(li); // Añadir el <li> a la lista 

    }); 

} 

 

// Función para sortear el amigo secreto 

function sortearAmigo() { 

    if (amigos.length === 0) { 

        alert("Por favor, añada al menos un amigo."); 

        return; 

    } 

 

    // Obtener un número aleatorio entre 0 y el tamaño del array 

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    let amigoSecreto = amigos[indiceAleatorio]; 

 

    // Mostrar el resultado en la pantalla 

    let resultado = document.getElementById('resultado'); 

    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; 

} 