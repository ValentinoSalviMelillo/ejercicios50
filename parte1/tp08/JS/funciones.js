function cambiarParrafos() {
    let lista = document.getElementsByTagName('p')
    for (let f = 0; f < lista.length; f++)
        lista[f].childNodes[0].nodeValue = lista[f].childNodes[0].nodeValue + '.'
}