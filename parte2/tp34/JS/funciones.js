document.getElementById('b1').addEventListener('click', presionBoton)
document.getElementById('b2').addEventListener('click', presionBoton)

function presionBoton(e) {
    let boton = e.target
    document.getElementById('titulo').innerText = `'Name:' ${boton.name} 'Id:'  ${boton.id} 'Value:' ${boton.value}`
}