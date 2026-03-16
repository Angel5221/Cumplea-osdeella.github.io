/* Función que se ejecuta cuando el usuario presiona el botón */
function verificar(){

/* Obtiene la fecha que el usuario seleccionó en el input */
let fechaIngresada = document.getElementById("fecha").value;

/* Guarda la fecha correcta que el sistema espera */
let fechaCorrecta = "2026-03-12";

/* Compara si la fecha ingresada es igual a la fecha correcta */
if(fechaIngresada === fechaCorrecta){

let mensaje = document.getElementById("mensaje");

/* mensaje de verificación */
mensaje.innerHTML = "🔎 Verificando identidad";
mensaje.classList.add("loading");

/* después de 3 segundos */
setTimeout(function(){

mensaje.classList.remove("loading");
mensaje.innerHTML = "✅ Acceso concedido";




/* Espera un tiempo antes de ejecutar algo */
setTimeout(function(){

/* Redirige al usuario a otra página dentro de una carpeta */
window.location.href = "Amor2.html";

/* Fin de la función que se ejecuta después del tiempo */
},2000);

/* 2000 milisegundos = 2 segundos de espera */

},3000);

/*3000 milisegundos = 3 segundos de espera*/

}else{


}

}
