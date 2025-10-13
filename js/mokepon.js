let ataqueJugador=""
let ataqueEnemigo=""

//Inicio del juego
function iniciarJuego() {

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReset = document.getElementById('reiniciar')
    botonReset.addEventListener('click',resetearJuego)

}

//Selección de mascotas
function seleccionarMascotaJugador() {

    //mascotaJugador
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        alert("Seleccionaste a Hipodoge")
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipeo'
        alert("Seleccionaste a Capipepo")
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        alert("Seleccionaste a Ratigueya")
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis'
        alert("Seleccionaste a Langostelvis")
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
        alert("Seleccionaste a Tucapalma")
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
        alert("Seleccionaste a Pydos")
    } else {
        alert("Selecciona una mascota")
    }

    //mascotaEnemigo
    seleccionarMascotaEnemigo(spanMascotaJugador.innerHTML)

}

function seleccionarMascotaEnemigo(tuMascota) {

    let numeroAleatorio = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')


    if (numeroAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        alert("Enemigo selecciona a Hipodoge")
    } else if (numeroAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipeo'
        alert("Enemigo selecciona a Capipepo")
    } else if (numeroAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        alert("Enemigo selecciona a Ratigueya")
    } else if (numeroAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
        alert("Enemigo selecciona a Langostelvis")
    } else if (numeroAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
        alert("Enemigo selecciona a Tucapalma")
    } else if (numeroAleatorio == 6) {
        spanMascotaEnemigo.innerHTML = 'Pydos'
        alert("Enemigo selecciona a Pydos")
    } else {
        alert("Enemigo selecciona a una mascota")
    }

    pelear(tuMascota, spanMascotaEnemigo.innerHTML)
}

//Pelea de animales sin ataques
function pelear(tuMascota, mascotaEnemigo) {
    let spanVidasTuMascota = document.getElementById('vidas-tumascota')
    let spanVidasMascotaEnemigo = document.getElementById('vidas-mascotaEnemigo')
    let pelea = 0

    switch (tuMascota) {
        case "Hipodoge":
            pelea = peleaConHipodoge(mascotaEnemigo)
            break
        case "Capipeo":
            pelea = peleaConCapipeo(mascotaEnemigo)
            break
        case "Ratigueya":
            pelea = peleaConRatigueya(mascotaEnemigo)
            break
        case "Langostelvis":
            pelea = peleaConLangostelvis(mascotaEnemigo)
            break
        case "Tucapalma":
            pelea = peleaConTucapalma(mascotaEnemigo)
            break
        case "Pydos":
            pelea = peleaConPydos(mascotaEnemigo)
            break
        default:
            pelea = 0
    }

    // Restar vidas según el resultado
    if (pelea === 1) {
        spanVidasMascotaEnemigo.innerHTML = parseInt(spanVidasMascotaEnemigo.innerHTML) - 1
    } else if (pelea === -1) {
        spanVidasTuMascota.innerHTML = parseInt(spanVidasTuMascota.innerHTML) - 1
    }

    // Mostrar resultado
    let resultado = verificarPelea(pelea)
    alert(resultado)
}


function verificarPelea(pelea) {
    if (pelea == 0) {
        return "EMPATE 🤝"
    } else if (pelea == 1) {

        return "GANASTE 🎉"
    }
    else {
        return "PERDISTE 💀"
    }
}

function peleaConHipodoge(enemigo) {
    switch (enemigo) {
        case "Ratigueya":
        case "Langostelvis":
        case "Pydos":
            return 1
        case "Capipeo":
        case "Tucapalma":
            return -1
        default:
            return 0
    }
}

function peleaConCapipeo(enemigo) {
    switch (enemigo) {
        case "Ratigueya":
        case "Pydos":
            return 1
        case "Hipodoge":
        case "Langostelvis":
        case "Tucapalma":
            return -1
        default:
            return 0
    }
}

function peleaConRatigueya(enemigo) {
    switch (enemigo) {
        case "Capipeo":
        case "Tucapalma":
            return 1
        case "Hipodoge":
        case "Langostelvis":
        case "Pydos":
            return -1
        default:
            return 0
    }
}

function peleaConLangostelvis(enemigo) {
    switch (enemigo) {
        case "Ratigueya":
        case "Pydos":
            return 1
        case "Hipodoge":
            return 0
        case "Capipeo":
        case "Tucapalma":
            return 0
        default:
            return 0
    }
}

function peleaConTucapalma(enemigo) {
    switch (enemigo) {
        case "Capipeo":
        case "Ratigueya":
        case "Langostelvis":
            return 1
        case "Pydos":
        case "Hipodoge":
            return 0
        default:
            return 0
    }
}

function peleaConPydos(enemigo) {
    switch (enemigo) {
        case "Capipeo":
        case "Ratigueya":
            return 1
        case "Hipodoge":
        case "Tucapalma":
        case "Langostelvis":
            return -1
        default:
            return 0
    }
}

//Ataques botones Fuego,Agua y Tierra
function ataqueFuego(){
    ataqueJugador="FUEGO"
    alert(ataqueJugador)
    ataqueEnemigo=ataqueDelEnemigo()
    alert(ataqueEnemigo)
    crearMensaje('1')
    
}
function ataqueAgua(){
    ataqueJugador="AGUA"
    alert(ataqueJugador)
    ataqueEnemigo=ataqueDelEnemigo()
   alert(ataqueEnemigo)
   crearMensaje('1')
}
function ataqueTierra(){
    ataqueJugador="TIERRA"
    alert(ataqueJugador)
    ataqueEnemigo=ataqueDelEnemigo()
    alert(ataqueEnemigo)
    crearMensaje('1')
}

function ataqueDelEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        return "FUEGO"
    } else if (ataqueAleatorio == 2) {
        return "AGUA"
    } else if (ataqueAleatorio == 3) {
       return "TIERRA"
    }else{
        return ""
    }
}

function crearMensaje(opcion){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    if (opcion=='1'){
        parrafo.innerHTML = 'Tu mascota atacó con '+ataqueJugador+', la mascota del enemigo atacó con '+ataqueEnemigo+' - ....'    
    }else{
        alert('Reseteo')
        sectionMensajes.innerHTML=''
    }
    

    sectionMensajes.appendChild(parrafo)
}

//Resetear juego
function resetearJuego(){
    crearMensaje('2')
}

//Otras
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Carga Listeners
window.addEventListener('load', iniciarJuego)