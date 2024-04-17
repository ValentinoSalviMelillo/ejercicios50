function moverItem() {
    let ref1 = document.getElementById('lista1')
    let refhijo = ref1.firstElementChild
    let ref2 = document.getElementById('lista2')
    ref2.appendChild(refhijo)
}