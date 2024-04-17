let contador = 1

function agregar() {
    let nt = document.createTextNode('Nuevo texto ' + contador + '-')
    let nparrafo = document.getElementById('parrafo')
    nparrafo.appendChild(nt)
    contador++
}