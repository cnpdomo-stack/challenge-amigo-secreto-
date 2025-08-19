let amigos = ["Juan", "María", "Pedro"];

console.log(amigos[0]); // Muestra "Juan"
console.log(amigos[1]); // Muestra "María"
console.log(amigos[2]); // Muestra "Pedro"


// Array global donde guardaremos los amigos
let amigos = [];

// Función para adicionar amigos
function Añadir() {
  // 1. Capturar el valor del campo de entrada
  const input = document.getElementById("nombre");
  const nombre = input.value.trim(); // elimina espacios al inicio y final

  // 2. Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; // detenemos la función si está vacío
  }

  // 3. Actualizar el array de amigos
  amigos.push(nombre);

  // (opcional) Mostrar el array en consola para verificar
  console.log(amigos);

  // 4. Limpiar el campo de entrada
  input.value = "";
  input.focus(); // regresa el cursor al campo de texto
}

function mostrarLista() {
  // 1. Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista existente
  lista.innerHTML = "";

  // 3. Iterar sobre el arreglo amigos
  for (let i = 0; i < amigos.length; i++) {
    // 4. Crear un elemento <li> para cada amigo
    const li = document.createElement("li");
    li.textContent = amigos[i];

    // 5. Agregar el <li> a la lista
    lista.appendChild(li);
  }
}
function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  // 2. Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado en pantalla
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "🎁 El amigo secreto es: <strong>" + amigoSorteado + "</strong>";
}


