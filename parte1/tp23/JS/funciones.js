let cantidad = 0

function agregarHijo() {
    cantidad++
    let nuevohijo = document.createElement('input')
    nuevohijo.type = 'text'
    nuevohijo.name = 'nombre' + cantidad
    nuevohijo.id = 'nombre' + cantidad
    document.getElementById('fs').appendChild(nuevohijo)
    document.getElementById('fs').appendChild(document.createElement('br'))
}