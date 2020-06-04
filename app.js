function main() {

  const nomeAlunno = document.getElementById('nome-alunno')
  const voto1 = document.getElementById('voto1') // vale 100%
  const voto2 = document.getElementById('voto2') // vale 33.33%
  const voto3 = document.getElementById('voto3') // vale 33.33%
  const voto4 = document.getElementById('voto4') // vale 33.33%
  const voto5 = document.getElementById('voto5') // vale 100%
  const voto7 = document.getElementById('voto7') // vale 200%
  const submitButton = document.querySelector('button')
  const risultato = document.getElementById('risultato')
  const nuovaMedia = document.querySelector('.nuova-media')

  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const media = (parseInt(voto1.value) * 10 + parseInt(voto2.value) * 3.333 + parseInt(voto3.value) * 3.333 + parseInt(voto4.value) * 3.333 + parseInt(voto5.value) * 10 + parseInt(voto7.value) * 20) / 49.999
    risultato.innerHTML = nomeAlunno.value + ' ha la media del ' + media.toFixed(2) + ' in Italiano.'
    nuovaMedia.classList.remove('nuova-media')
  })




}

window.addEventListener('DOMContentLoaded', main)