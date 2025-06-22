
var data = new Date();
var hora = data.getHours(); 

console.log(`Agora são exatamente ${hora} horas.`);

if (hora >= 0 && hora <= 5) {
    console.log('Boa madrugada!');
} else if (hora < 12) {
    console.log('Bom dia!');
} else if (hora < 18) {
    console.log('Boa tarde!');
} else if (hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Hora inválida!');
}
