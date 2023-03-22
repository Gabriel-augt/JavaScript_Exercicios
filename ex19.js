// Percorrer vetor e contar os números negativos.
function negativos (vetorNumeros) {
    let numsNegativos = 0
    for (let item = 0; item < vetorNumeros.length; item++) {
        if (vetorNumeros[item] < 0) {
            numsNegativos++
        }
    }
    return numsNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9, -5]

console.log('Números negativos encontrados:', negativos(vetor))
