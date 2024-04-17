function proximoParrafo() {
    let puntero1 = document.getElementById('parrafos')
    let puntero2 = puntero1.firstChild
    while (puntero2 != null) {
        if (puntero2.nodeType == Node.ELEMENT_NODE)
            alert(puntero2.childNodes[0].nodeValue)
        else
            alert('No es un nodo tipo elemento')
        puntero2 = puntero2.nextSibling
    }
}