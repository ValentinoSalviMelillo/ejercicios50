 let r1 = document.getElementById('recu1')
  r1.addEventListener('mousedown', presionar)
  r1.addEventListener('mouseup', soltar)

  let r2 = document.getElementById('recu2')
  r2.addEventListener('mousedown', presionar)
  r2.addEventListener('mouseup', soltar)

  function presionar(e) {
      e.target.style.backgroundColor = '#ffff00'
  }

  function soltar(e) {
      e.target.style.backgroundColor = '#ffffff'
  }