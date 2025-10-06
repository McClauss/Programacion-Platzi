function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

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
    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {

    let numeroAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')


     if (numeroAleatorio==1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        alert("Enemigo selecciona a Hipodoge")
    } else if (numeroAleatorio==2) {
        spanMascotaEnemigo.innerHTML = 'Capipeo'
        alert("Enemigo selecciona a Capipepo")
    } else if (numeroAleatorio==3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        alert("Enemigo selecciona a Ratigueya")
    } else if (numeroAleatorio==4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
        alert("Enemigo selecciona a Langostelvis")
    } else if (numeroAleatorio==5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
        alert("Enemigo selecciona a Tucapalma")
    } else if (numeroAleatorio==6) {
        spanMascotaEnemigo.innerHTML = 'Pydos'
        alert("Enemigo selecciona a Pydos")
    } else {
        alert("Enemigo selecciona a una mascota")
    }
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarJuego)