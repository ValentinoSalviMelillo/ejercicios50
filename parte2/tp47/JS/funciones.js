document.getElementById('div2').addEventListener('click', (event) => {
    alert('se presionó el recuadro interior')
    event.stopPropagation()
})
document.getElementById('div1').addEventListener('click', (event) => {
    alert('se presionó el recuadro exterior')
})