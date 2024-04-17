function insertarEnMedio() {
    let elemento = document.createElement('p')
    let nodotexto = document.createTextNode('Párrafo entre segundo y tercero')
    elemento.appendChild(nodotexto)
    let puntero = document.getElementById('p3')
    let pa = document.getElementById('parrafos')
    pa.insertBefore(elemento, puntero)
}