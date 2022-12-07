let p1, g1, km, res
p1 = 1.85
g1 = 12
km = 600
res = (km/g1)*p1
var res2 = res.toLocaleString('pt-BR', {style: 'currency',  currency: 'eur'}) //formatar em moeda, troque o EUR por BRL e para dolar americano USD 
console.log('O custo da viagem será de: ' + res2) // .tofixxed().replace('.', ',') -> determina a qtde de casas decimais. .replace -> troca o ponto pela virgula.



