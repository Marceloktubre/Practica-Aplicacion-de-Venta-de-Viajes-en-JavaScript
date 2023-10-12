import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll("a");
let tituloElmentos = document.getElementById("titulo");
let subtituloElmentos = document.getElementById("subtitulo");
let parrafoElmentos = document.getElementById("parrafo");
let precioElmentos = document.getElementById("precio");

//Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    //REMOVER LA CLASE "ACTIVE" DE TODOS LOS ENLACES
    enlaces.forEach(function (enlace) {
      enlace.classList.remove('active');
    });
    //AGREGAR LA CLASE "ACTIVE" AL ENLACE ACTUAL
    this.classList.add('active');

    //OBTENER EL CONTENIDO CORRESPONDIENTE SEGÚN EL ENLACE
    let contenido = obtenerContenido(this.textContent);

    //MOSTRAR EL CONTENIDO EN EL DOM
    tituloElmentos.innerHTML = contenido.titulo
    subtituloElmentos.innerHTML = contenido.subtitulo
    parrafoElmentos.innerHTML = contenido.parrafo
    precioElmentos.innerHTML = contenido.precio
  });
});

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
