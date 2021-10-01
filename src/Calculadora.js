export function Calculadora(cadena) {
    let cadenaDividida = cadena.split(",")
    let suma = 0
    for(let i in cadenaDividida){
        suma = suma + parseInt(cadenaDividida[i],10)
    }
    return suma;
}