function maiorEmenor (valores) {
    let maiorN = 0
    let menorN 
    for (let item = 0; item < valores.length; item++) {
        if (menorN === undefined) {
            menorN = valores[item]
        }
        if (valores[item] > maiorN) {
            maiorN = valores[item]
        } else if (valores[item] < menorN) {
            menorN = valores[item]
        }
    }
    return [maiorN, menorN]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log('Maior e menor:', maiorEmenor(vetor))
