// Calculadora básica com switch.
function calculadora (n1,operador,n2) {
    switch (operador) {
        case '+':
            console.log(`${n1} + ${n2} = ${n1 + n2}`)
            break
        case '-':
            console.log(`${n1} - ${n2} = ${n1 - n2}`)
            break
        case '*':
            console.log(`${n1} x ${n2} = ${n1 * n2}`)
            break
        case '/':
            console.log(`${n1} ÷ ${n2} = ${n1 / n2}`)
            break
        default:
            console.log('Operações inválidas')
            break
    }

}

calculadora(7, '+', 3)
calculadora(10, '-', 5)
calculadora(5, '*', 5)
calculadora(50, '/', 2)
calculadora(2, 'a', 3)
