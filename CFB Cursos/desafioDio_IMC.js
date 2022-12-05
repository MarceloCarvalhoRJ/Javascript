let peso, alt, imc

peso = 92
alt = 1.83
imc = peso/(alt**2) // Math.pow(alt,2) -> outra maneira de calcular potencia utilizando uma biblioteca do JS.
console.log('Seu IMC é ' + imc.toFixed(1))
if (imc < 18.5){
    console.log('Você está abaixo do peso')
}else if (imc >= 18.5 && imc < 25){
    console.log('Seu peso é normal')
}else if(imc >= 25 && imc < 30){
    console.log('Você está acima do peso')
}else if(imc >= 30 && imc < 40){
    console.log('Cuidado, você está obeso')
}else{
    console.log('Urgente! Sua OBESIDADE é grave!')
}