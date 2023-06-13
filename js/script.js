import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, verifyIfIsNotANumber } from './utils.js'

const form = document.querySelector('.card form')
const inputWeight = form.querySelector('.input-wrapper #weight')
const inputHeight = form.querySelector('.input-wrapper #height')
const inputs = [inputWeight, inputHeight]

function showResult(result) {
  Modal.open()
  Modal.message.innerText = `Seu IMC é de ${result}`
}

form.onsubmit = event => {
  event.preventDefault()

  let weight = inputWeight.value
  let height = inputHeight.value

  const isWeightOrHeightNotANumber =
    verifyIfIsNotANumber(weight) || verifyIfIsNotANumber(height)

  if (isWeightOrHeightNotANumber) {
    return AlertError.show()
  } else {
    weight = +weight
    height = +height

    AlertError.hide()

    const result = calculateIMC(weight, height)
    showResult(result)
  }
}

inputs.forEach(input => {
  input.addEventListener('input', () => AlertError.hide())
})
