function Calculadora(cadena) {
    let cadenaDividida = cadena.split(",")
    let num1 = parseInt(cadenaDividida[0],10)
    let num2 = parseInt(cadenaDividida[2],10)
    let suma = num1 + num2
    return suma;
  }