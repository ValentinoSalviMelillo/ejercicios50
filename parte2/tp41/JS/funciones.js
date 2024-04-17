document.getElementById('formulario').addEventListener('submit', (e) => {
    let nom = document.getElementById('usuario')
    let cla = document.getElementById('clave')
    if (nom.value == '' || cla.value == '') {
        alert('debe ingresar los dos datos')
        e.preventDefault()
        return false
    } else
        return true
})