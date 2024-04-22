export class LinkedList{
    posicion=0;
    Reproduciendo = false;

reproducirAudio(audio){
    if(this.Reproduciendo){
        this.pausarCancion(audio);
        btnReproducir.textContent = "Play";
    }else{
        this.reproducirCancion(audio);
        btnReproducir.textContent = "Pause"
    }
    this.Reproduciendo = !this.Reproduciendo;
    console.log(this.posicion)
}

volverInicio(canciones){
    if(canciones.length==this.posicion+1){
        this.posicion=-1;
    }
}

volverFinal(canciones){
    if(this.posicion==0){
        this.posicion=canciones.length;
    }
}

actualizarTiempo(audio,progreso){
    let valor = audio.currentTime / audio.duration;
    progreso.value = valor;
}

cargarCancion(titulo,audio,canciones){
    titulo.innerText = canciones[this.posicion];
    audio.src = `./src/music/${canciones[this.posicion]}.mp3`
}

cargarImagen(image,canciones){
    image.src =`./src/images/${canciones[this.posicion]}.jpg`
}


reproducirCancion(audio){
    audio.play();
}

pausarCancion(audio){
    audio.pause();
}

cancionAnterior(canciones,audio,image,titulo){
    this.volverFinal(canciones);
    this.posicion--;
    btnReproducir.textContent = "Pause";
    this.Reproduciendo=true;
    this.cargarCancion(titulo,audio,canciones/*canciones[this.posicion]*/)
    this.cargarImagen(image,canciones);
    this.reproducirCancion(audio);
}

cancionSiguiente(canciones,audio,image,titulo){
    this.volverInicio(canciones);
    this.posicion++;
    btnReproducir.textContent = "Pause";
    this.Reproduciendo=true;
    this.cargarCancion(titulo,audio,canciones/*canciones[this.posicion]*/);
    this.cargarImagen(image,canciones);
    this.reproducirCancion(audio);
    }
}
