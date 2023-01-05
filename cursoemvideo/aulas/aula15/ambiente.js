let num = [5, 8, 4, 7, 1, -9]
num.push(2) // inseri o elemento 2 na proxima posição da array.
num.sort() // classificar os valores em ordem crescente.
console.log(`Nosso vetor é o ${num}`)
console.log(`Ele tem ${num.length} posições`) // conta a qtde de elementos da array.
console.log(`O primeiro valor é ${num[0]}`) // exibe o valor do elemento na posição 0.

// Loop para exibir todos os valores de cada posição do vetor.
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 

// jeito mais facil/simplificado de fazer o loop acima:
for (let pos in num){ // só aceita em variáveis do tipo array.
    console.log(`The position ${pos} has the value ${num[pos]}`)
}

pos = num.indexOf(4) // informa em que chave está o elemento 4. / obs. -1 significa que o elemento não existe, dá para fazer um if e informar que não existe.
if (pos==-1){
    console.log("Esse valor não existe.")
}else {
    console.log(`o valor 4 está na posição ${pos}`)
}
