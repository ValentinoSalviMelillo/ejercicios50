let contador = 1

function agregar() {
    let nuevoelemento = document.createElement("p")
    let nuevotexto = document.createTextNode("Hola Mundo " + contador + " - ")
    contador++
    nuevoelemento.appendChild(nuevotexto)
    let puntero = document.getElementById("parrafos")
    puntero.appendChild(nuevoelemento)
}

function eliminarPrimero() {
    let puntero = document.getElementById("parrafos")
    if (puntero.children.length > 0)
        puntero.removeChild(puntero.children[0])
}

function eliminarUltimo() {
    let puntero = document.getElementById("parrafos")
    if (puntero.children.length > 0)
        puntero.removeChild(puntero.children[puntero.children.length - 1])
}