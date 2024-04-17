function mover(e) {
    let corx = document.getElementById('corx')
    let cory = document.getElementById('cory')
    corx.innerText = 'coordenada x=' + e.clientX
    cory.innerText = 'coordenada y=' + e.clientY
}