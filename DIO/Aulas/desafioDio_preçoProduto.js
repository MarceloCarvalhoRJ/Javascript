let formapagto, deb, din, em2x, juros, resultado 
let preco = 150
forma1 = 'Débito' 
forma2 = 'dinheiro'
forma3 = 'em 2x'
forma4 = 'acima de 2x'

formapagto = forma4
console.log('Você escolheu a forma de pagto ' + formapagto)

if (formapagto === forma1){
    (resultado = preco * 0.9)
    console.log ('O total a pagar com 10% de desconto é ' + resultado.toLocaleString('pt-BR', {style: 'currency',  currency: 'eur'}))
} else if (formapagto === forma2){
    (resultado = preco * 0.85)
    console.log('O total a pagar com 15% de desconto é ' + resultado.toLocaleString('pt-BR', {style: 'currency',  currency: 'eur'}))    
} else if (formapagto === forma3){
    (resultado = preco)
    console.log('O total a pagar sem desconto é ' + resultado.toLocaleString('pt-BR', {style: 'currency',  currency: 'eur'}))    
} else if (formapagto === forma4){
    (resultado = preco * 1.10)
    console.log('O total a pagar com juros de 10% é ' + resultado.toLocaleString('pt-BR', {style: 'currency',  currency: 'eur'}))    
}