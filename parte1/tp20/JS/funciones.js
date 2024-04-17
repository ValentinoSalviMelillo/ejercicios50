function crearEnlaces() {
    //Utilizando el innerHTML
    let ob1 = document.getElementById("enlaces1")
    ob1.innerHTML = `<a href="${document.getElementById('text1').value}">Enlace 1</a>
                     <br><a href="${document.getElementById('text2').value}">Enlace 2</a>`

    //Utilizando los métodos para crear nodos de elemento y texto
    let elemento = document.createElement('a')
    let puntero = document.getElementById('enlaces2')
    puntero.appendChild(elemento)
    let nodotexto = document.createTextNode('Enlace 1')
    elemento.appendChild(nodotexto)
    elemento.setAttribute('href', document.getElementById('text1').value)
    puntero.appendChild(document.createElement('br'))
    elemento = document.createElement('a')
    puntero.appendChild(elemento)
    nodotexto = document.createTextNode('Enlace 2')
    elemento.appendChild(nodotexto)
    elemento.setAttribute('href', document.getElementById('text2').value)
}