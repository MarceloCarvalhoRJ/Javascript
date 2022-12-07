let n1, n2, n3, media, res
n1 = 7
n2 = 7
n3 = 0
media = (n1+n2+n3)/3
console.log('Sua média foi: ' + media.toFixed(2))
if (media <5){
    console.log('Reprovado')
}else if (media >= 5 && media < 7){
    console.log('Recuperação')
}else {
    console.log('Aprovado!')
}