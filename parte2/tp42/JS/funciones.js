document.getElementById('usuario').addEventListener('keydown', (e) => {
    let tecla = e.key
    if (tecla == ' ') {
        e.preventDefault()
        alert('No se puede ingresar espacios en blanco para un nombre de usuario')
    }
})