function eliminarAtributo() {
    let puntero = document.getElementById('enlace1')
    puntero.removeAttribute('href')
    puntero = document.getElementById('enlace2')
    puntero.removeAttribute('href')
}

function inicializarAtributo() {
    let puntero = document.getElementById('enlace1')
    puntero.setAttribute('href', 'https://www.google.com.ar')
    puntero = document.getElementById('enlace2')
    puntero.setAttribute('href', 'https://www.yahoo.com.ar')
}