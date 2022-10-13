/* Desafío: javaScript

Nombre de Desafío: introduccion_js

Instrucciones

Crea una lista con los siguientes elementos:

- Tu nombre (string) 
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */



var miNombre = "Jesus";
var miApelido= "Guevara";
var miEdad = 40;
var soyDesarroladorweb = true;
var fechaNacimiento = "18 de septiembre";
var libroFavorito = {
    Titulo: "El club de las 5 de la mañana",
    Autor: "Robin Sharman",
    Fecha: "Año 2000",
    Url: "Club5delamañana.com"
}
var pasatiempFav = ["leer", "caminar", "beisbol"]

function miActividadFavorita(a) {
    console.log(a)
}miActividadFavorita = "Leer"
