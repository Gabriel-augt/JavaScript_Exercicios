// Verificar par ou ímpar no vetor.
function parImpar (valor) {
    let par = 0
    let impar = 0
    for (let item = 0; item < valor.length; item++) {
        if (valor[item] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`Números pares: ${par}.`)
    console.log(`Números ímpares: ${impar}.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
parImpar(vetor)
