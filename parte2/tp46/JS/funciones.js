document.getElementById('div1i').addEventListener('click', presionRecuadroInte)
document.getElementById('div1e').addEventListener('click', presionRecuadroExte)
document.getElementById('div2i').addEventListener('click', presionRecuadroInte, true)
document.getElementById('div2e').addEventListener('click', presionRecuadroExte, true)

function presionRecuadroInte() {
    alert('se presionó el recuadro interior')
}

function presionRecuadroExte() {
    alert('se presionó el recuadro exterior')
}