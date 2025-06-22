var idade = 30
console.log(`Você tem ${idade} anos`)

if (idade >= 99) {
    console.log('Esta pessoa está morta')
} else if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto facultativo')
} else {
    console.log('Voto obrigatório')}