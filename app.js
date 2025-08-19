let amigos = ["Juan", "María", "Pedro"];

console.log(amigos[0]); // Muestra "Juan"
console.log(amigos[1]); // Muestra "María"
console.log(amigos[2]); // Muestra "Pedro"


// Array global donde guardaremos los amigos
let amigos = [];

// Función para adicionar amigos
function adicionarAmigo() {
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
