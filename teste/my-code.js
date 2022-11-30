const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (dividendo, divisor) => {
  if (divisor == 0) {
    throw new Error("Não é possível dividir por zero" + divisor)
  }
  return dividendo / divisor
}
const media = (val1, val2, val3) => { return (val1 + val2 + val3) / 3 }

export {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  media
}


