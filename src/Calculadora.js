export function Calculadora(cadena) {
    let separadores = [",","-"]
    let aux = 0
    let suma = 0
    let auxCar = ","
    separadores.forEach(function(caracter){
        aux = cadena.search(caracter);
        if(aux != -1){
            auxCar = caracter
        }
    });
    let cadenaDividida = cadena.split(auxCar)
    for(let i in cadenaDividida){
        suma = suma + parseInt(cadenaDividida[i],10)
    }
    return suma;
}