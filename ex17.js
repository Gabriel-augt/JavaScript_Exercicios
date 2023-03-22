// Contar números dentro do intervalo de 10 e 20. 
function intervalo (valores) {
    numerosNoIntervalo = 0
    for (let item = 0; item < valores.length; item++) {
        if (valores[item] >= 10 && valores[item] <= 20) {
            numerosNoIntervalo++
        }
    }
    console.log(`${numerosNoIntervalo} números dentro do intervalo.`)
}

vetor = [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
intervalo(vetor)
