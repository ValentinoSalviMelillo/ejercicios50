function cambiarAtributo() {
    let reftabla = document.getElementById('tabla1')
    if (reftabla.hasAttribute('border'))
        reftabla.removeAttribute('border')
    else
        reftabla.setAttribute('border', '5')
}