/*var idade = 16
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota!')
}else if (idade < 18 || idade >= 65) {
    console.log('Seu voto é facultativo.')
}else {
    console.log('Seu voto é obrigatório.')
}*/

var agora = new Date()
var hora = agora.getHours() // informa a hora atual no sistema
console.log(`São exatamente ${hora} horas`)

if (hora >= 0 && hora < 6) {
    console.log('Boa madrugada!')
}else  if (hora < 12) {
    console.log('Bom dia!')
}else if (hora < 18) {
    console.log('Boa tarde!')
}else if (hora < 24) {
    console.log('Boa noite!')
}else {
    console.log('Voce digitou hora inválida!')
}