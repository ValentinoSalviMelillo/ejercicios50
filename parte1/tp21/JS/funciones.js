function cambiarTitulo() {
    let tit = document.getElementById("titulo1")
    tit.innerText = "Nuevo título"
}

function recuperarTitulo() {
    alert(document.getElementById("titulo1").innerText)
}