export function Calculadora(cadena,separador) {
    let separadores = [",","-"]
    let aux = 0
    let suma = 0
    let auxCar = ""
    let i = 0
    let cadenaDividida

    aux = cadena.search(separador)
    if(aux == -1){
        separadores.push(separador);
    }

    separadores.forEach(function(caracter){
        aux = cadena.search(caracter);
        if(aux != -1){
            auxCar = caracter
            cadenaDividida = dividirCadena(cadena, auxCar)
            for(i in cadenaDividida){
                if(parseInt(cadenaDividida[i],10) < 1000){
                    suma = suma + parseInt(cadenaDividida[i],10)
                }
            }
        }
    });
    

    return suma;
}
function dividirCadena(cadena, caracter){
    let cadenaDividida = cadena.split(caracter)
    return cadenaDividida
}