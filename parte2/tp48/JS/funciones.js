document.getElementById('enlace').addEventListener('click', (e) => {
    e.preventDefault()
    let url = e.target.getAttribute('href')
    window.open(url)
})