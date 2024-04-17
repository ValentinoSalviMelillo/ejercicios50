document.getElementById("boton1").addEventListener("click", (e) => {
    document.getElementById("datos").innerHTML = `
    <p>Tecla alt presionada (e.altKey) ? ${e.altKey}</p>
    <p>Tecla ctrl presionada (e.ctrlKey) ? ${e.ctrlKey}</p>
    <p>Tecla shift presionada (e.shiftKey) ? ${e.shiftKey}</p>
    <p>Tecla Meta presionada (e.metaKey) ? ${e.metaKey}</p>
    <p>Nombre del evento (e.type)? ${e.type}</p>
    <p>El elemento que causo el evento (e.target) ? ${e.target}</p>
    <p>La coordenada x del mouse respecto a la ventana (e.clientX) ? ${e.clientX}</p>
    <p>La coordenada y del mouse respecto a la ventana (e.clientY) ? ${e.clientY}</p>
    <p>La coordenada x del mouse respecto a la pantalla completa (e.screenX) ? ${e.screenX}</p>
    <p>La coordenada y del mouse respecto a la pantalla completa (e.screenY) ? ${e.screenY}</p>
    <p>La coordenada x del mouse respecto al comienzo de la página (e.pageX) ? ${e.pageX}</p>
    <p>La coordenada y del mouse respecto al comienzo de la página (e.pageY) ? ${e.pageY}</p>
    <p>Número de botón del mouse presionado (e.button) ? ${e.button}</p>`
})