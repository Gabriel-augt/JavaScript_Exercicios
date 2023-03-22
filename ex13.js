// Simulação de lanchonete.
function lanche (codigoPedido, quantidade) {
    switch (codigoPedido) {
        case 100:
            let cachorroQuente = (quantidade * 3).toFixed(2)
            console.log(`Valor do pedido: R$${cachorroQuente}.`)
            break
        case 200:
            let hamburguer = (quantidade * 4).toFixed(2)
            console.log(`Valor do pedido: R$${hamburguer}.`)
            break
        case 300:
            let cheeseBurguer = (quantidade * 5.5).toFixed(2)
            console.log(`Valor do pedido: R$${cheeseBurguer}.`)
            break
        case 400:
            let bauru = (quantidade * 7.5).toFixed(2)
            console.log(`Valor do pedido: R$${bauru}.`)
            break
        case 500:
            let refrigerante = (quantidade * 3.5).toFixed(2)
            console.log(`Valor do pedido: R$${refrigerante}.`)
            break
        case 600:
            let suco = (quantidade * 2.8).toFixed(2)
            console.log(`Valor do pedido: R$${suco}.`)
            break
        default:
            console.log('O produto não existe!')
    }
}

lanche(100, 2)
lanche(200, 2)
lanche(300, 2)
lanche(400, 2)
lanche(500, 2)
lanche(600, 2)
