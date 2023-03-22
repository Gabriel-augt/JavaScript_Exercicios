// Simulação de plano de saúde.
function planoDeSaude (idade) {
    if (idade < 10) {
        return 'O plano custa R$180,00.'
    } else if (idade < 30) {
        return 'O plano custa R$150,00.'
    } else if (idade < 60) {
        return 'O plano custa R$195,00'
    } else {
        return 'O plano custa R$230,00.'
    }

}

console.log(planoDeSaude(7))
console.log(planoDeSaude(20))
console.log(planoDeSaude(50))
console.log(planoDeSaude(70))
