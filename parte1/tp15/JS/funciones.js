function crearElementoyAtributo() {
    let elemento = document.createElement('a')
    let puntero = document.getElementById('direccion')
    puntero.appendChild(elemento)
    let nodotexto = document.createTextNode('google')
    elemento.appendChild(nodotexto)
    elemento.setAttribute('href', 'https://www.google.com.ar')
}