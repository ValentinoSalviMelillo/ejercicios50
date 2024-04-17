document.getElementById('text1').addEventListener('focus', tomarFoco)
document.getElementById('text2').addEventListener('focus', tomarFoco)
document.getElementById('text1').addEventListener('blur', perderFoco)
document.getElementById('text2').addEventListener('blur', perderFoco)


function tomarFoco(e) {
    e.target.style.color = '#f00'
}

function perderFoco(e) {
    e.target.style.color = '#00f'
}