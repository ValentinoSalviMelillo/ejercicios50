document.getElementById('nombre').addEventListener('change', modificarControl)
document.getElementById('apellido').addEventListener('change', modificarControl)
document.getElementById('hijos').addEventListener('change', modificarControl)

function modificarControl(e) {
    let ob = e.target
    alert('Se modificó el control:' + ob.getAttribute('id'))
}