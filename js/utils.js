export function calculateIMC(weight, height) {
  return +(weight / (height / 100) ** 2).toFixed(2)
}

export function verifyIfIsNotANumber(value) {
  return isNaN(value) || value === '' || value === ' ' || value.includes(' ')
}
