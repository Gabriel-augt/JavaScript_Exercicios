// Média aritmética de notas.
function media (vetornotas) {
    let somaNotas = 0
    for (item = 0; item < vetornotas.length; item++) {
        somaNotas = somaNotas + vetornotas[item] // somaNotas+= vetornotas[item]
    }
    mediaNota = somaNotas/vetornotas.length
    return mediaNota
}

notas = [6, 8, 7.5, 6.5, 9]
console.log(`Média das notas: ${media(notas)}.` )
