let energia = 70
let clima = 'chuva'

if(energia >= 70 && (clima == 'sol' || clima=='nublado')){
    console.log('Vamos pedalar!')
}else if((energia >= 50 && energia < 70) && (clima  == 'sol' || clima == 'nublado')) {
    console.log('Vamos caminhar no parque.')
}else {
    console.log('Vou ficar em casa.')
}