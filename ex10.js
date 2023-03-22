// Reajuste salarial com 10%, 15%, 20% de aumento.
function calcularReajuste (plano, salario) {
    switch (plano) {
        case 'A':
            let aumento10 = salario * 1.1
            return console.log(`Seu salário com reajuste é R$${aumento10}.`) 
        case 'B':
            let aumento15 = salario * 1.15
            console.log(`Seu salário com reajuste é R$${aumento15}.`)
            break
        case 'C':
            console.log(`Seu salário com reajuste é R$${salario * 1.2}.`)
            break
        default:
            console.log('Plano inválido!')
    }
}

calcularReajuste('A', 1000)
calcularReajuste('B', 2000)
calcularReajuste('C', 2500)
calcularReajuste('G', 1500)
