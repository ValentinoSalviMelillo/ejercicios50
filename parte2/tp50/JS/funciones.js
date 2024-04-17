document.querySelector("#boton1").addEventListener('click', (e) => {
    let lista = document.querySelectorAll("ol li")
    for (let elemento of lista)
        elemento.style.backgroundColor = '#ff0'
})