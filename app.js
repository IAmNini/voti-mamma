function main() {

  const nomeAlunno = document.getElementById('nome-alunno')
  const voto1 = document.getElementById('voto1') // vale 150%
  const voto2 = document.getElementById('voto2') // vale 100%
  const voto3 = document.getElementById('voto3') // vale 100%
  const voto4 = document.getElementById('voto4') // vale 50%
  const voto5 = document.getElementById('voto5') // vale 40%
  const voto6 = document.getElementById('voto6') // vale 40%
  const voto7 = document.getElementById('voto7') // vale 40%
  const voto8 = document.getElementById('voto8') // vale 50%
  const voto9 = document.getElementById('voto9') // vale 20%
  const voto10 = document.getElementById('voto10') // vale 20%
  const voto11 = document.getElementById('voto11') // vale 20%
  const submitButton = document.querySelector('button')
  const risultato = document.getElementById('risultato')
  const nuovaMedia = document.querySelector('.nuova-media')

  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    let totalCredits = 15
    let media = (parseFloat(voto1.value)) * 15
    if (voto2.value !== '.') {
      media = media + parseFloat(voto2.value) * 10
      totalCredits = totalCredits + 10
    }
    if (voto3.value !== '.') {
      media = media + parseFloat(voto3.value) * 10
      totalCredits = totalCredits + 10
    }
    if (voto4.value !== '.') {
      media = media + parseFloat(voto4.value) * 5
      totalCredits = totalCredits + 5
    }
    if (voto5.value !== '.') {
      media = media + parseFloat(voto5.value) * 4
      totalCredits = totalCredits + 4
    }
    if (voto6.value !== '.') {
      media = media + parseFloat(voto6.value) * 4
      totalCredits = totalCredits + 4
    }
    if (voto7.value !== '.') {
      media = media + parseFloat(voto7.value) * 4
      totalCredits = totalCredits + 4
    }
    if (voto8.value !== '.') {
      media = media + parseFloat(voto8.value) * 5
      totalCredits = totalCredits + 5
    }
    if (voto9.value !== '.') {
      media = media + parseFloat(voto9.value) * 2
      totalCredits = totalCredits + 2
    }
    if (voto10.value !== '.') {
      media = media + parseFloat(voto10.value) * 2
      totalCredits = totalCredits + 2
    }
    if (voto11.value !== '.') {
      media = media + parseFloat(voto11.value) * 2
      totalCredits = totalCredits + 2
    }
    media = media / totalCredits
    
    risultato.innerHTML = nomeAlunno.value + ' ha la media del ' + media.toFixed(2) + ' in Italiano.'
    nuovaMedia.classList.remove('nuova-media')
  })




}

window.addEventListener('DOMContentLoaded', main)