function cambiarParrafos() {
    let obj = document.getElementById("bloque2")
    let lista = obj.getElementsByTagName('p')
    for (let elemento of lista)
        elemento.childNodes[0].nodeValue = elemento.childNodes[0].nodeValue + '.'
}