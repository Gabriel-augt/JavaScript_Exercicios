// Classificar triângulo em Equilátero, Isósceles ou Escaleno.
function triangulo (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3){
        return console.log('Triângulo Equilátero.')
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return console.log('Triângulo Isósceles.')
    } else {
        return console.log('Triângulo Escaleno.')
    }
}

triangulo(1,2,2)
triangulo(2,2,2)
triangulo(2,5,7)
