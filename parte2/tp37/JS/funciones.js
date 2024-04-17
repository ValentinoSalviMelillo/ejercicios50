let vec = document.getElementsByTagName('input')
for (let f = 0; f < vec.length; f++) {
    vec[f].addEventListener('mouseover', entrar)
    vec[f].addEventListener('mouseout', salir)
}

function entrar(e) {
    e.target.style.color = '#f00'
}

function salir(e) {
    e.target.style.color = '#000'
}