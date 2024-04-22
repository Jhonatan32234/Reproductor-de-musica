import { listaMusica } from "./Dependencies.js";
let canciones = ['Netflix & Chill', 'Adventure', 'New Beginning','Beat It','Billie Jean','Im bad','Smooth Criminal','Thriller'];   
let titulo = document.getElementById("titulo");
let image = document.getElementById("image");
let progreso = document.getElementById("progreso");
let btnAnterior = document.getElementById("btnAnterior");
let btnReproducir = document.getElementById("btnReproducir");
let btnSiguiente = document.getElementById("btnSiguiente");
let audio = document.getElementById("audio");


listaMusica.cargarCancion(titulo,audio,canciones);
listaMusica.cargarImagen(image,canciones);

audio.addEventListener('ended',function(){
    listaMusica.volverInicio(canciones);
    listaMusica.cancionSiguiente();
    
})
audio.addEventListener('timeupdate',function(){
    listaMusica.actualizarTiempo(audio,progreso);
})
btnReproducir.addEventListener('click',function(){
    listaMusica.reproducirAudio(audio);
})

btnAnterior.addEventListener('click',function(){
    listaMusica.cancionAnterior(canciones,audio,image,titulo);
})
    
btnSiguiente.addEventListener('click',function(){
    listaMusica.cancionSiguiente(canciones,audio,image,titulo);
})