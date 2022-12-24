
function contar() { 

    let ini = document.getElementById('txti')
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    var res = document.getElementById("res")
    /*var res = document.getElementById("resultado")
    var oper = num1 + passo*/

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert("[ERRO] Faltando dados!")
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = ("Contando: <br>")
        let i = Number(txti.value) // pega o vlr da var txti e transforma em numero.
        let f = Number(txtf.value)
        let p = Number(txtp.value)
        if (p == 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}` // += ele mantem o que ja tem em res e adiciona o valor seguinte.
        }
        }else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } 
        res.innerHTML += `\u{1F3C1}` // inseri o codigo do emoji no JS.
    } 
    

    
        
    /*res.innerHTML = Number(num1)*/


    
}
