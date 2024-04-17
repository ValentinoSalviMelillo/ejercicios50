function cantidadHijos() {
    let lista = document.getElementById('bloque')
    alert('La cantidad de hijos del nodo div es:' + lista.childNodes.length)
    let cadena = ""
    for (let x = 0; x < lista.childNodes.length; x++) {
        if (lista.childNodes[x].nodeType == Node.TEXT_NODE)
            cadena = cadena + "Nodo tipo Texto\n"
        if (lista.childNodes[x].nodeType == Node.ELEMENT_NODE)
            cadena = cadena + "Nodo tipo Elemento\n"
    }
    alert(cadena)
}