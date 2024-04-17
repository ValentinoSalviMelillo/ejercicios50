function proximoParrafo() {
    let puntero1 = document.getElementById('parrafo1')
    while (puntero1 != null) {
        if (puntero1.nodeType == Node.ELEMENT_NODE)
            alert(puntero1.childNodes[0].nodeValue)
        puntero1 = puntero1.nextSibling
    }
}