function mostrarAtributos(objeto) {
    let ref = document.getElementById('titulo')
    ref.innerText = `Name: ${objeto.name} Id: ${objeto.id} Value: ${objeto.value}`
}