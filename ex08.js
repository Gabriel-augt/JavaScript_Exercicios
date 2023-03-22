// Revendedora de Hatch.
function modelosVeiculos (modelo) {
    switch (modelo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedan':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Tem certeza que prefere esse modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
    }
}

modelosVeiculos('hatch')
modelosVeiculos('sedan')
modelosVeiculos('motocicletas')
modelosVeiculos('caminhonetes')
modelosVeiculos('fiat')
