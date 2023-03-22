// Formatar valor e mostrar em Reais.
function formatarDinheiro (valor1 , valor2) {
    let somarReais = valor1 + valor2
    let formatoReais = somarReais.toFixed(2).toString().replace('.' ,',')
    console.log(`R$ ${formatoReais}`)
}
formatarDinheiro(0.1 , 0.2) 
console.log('R$', 0.1 + 0.2) // Valor sem formatação.
