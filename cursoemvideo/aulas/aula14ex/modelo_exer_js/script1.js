
function tabuada() { 

    let num = document.getElementById('txtn')
    let tab = document.getElementById("seltab")
    

    if (num.value.length == 0){
        alert("Por favor, digite um número!")
        
    }else{
        let num = Number(txtn.value) // pega o vlr da var txti e transforma em numero.
        tab.innerHTML = ""
            for( let c = 1; c <= 10; c += 1) {
                let item = document.createElement("option")
                item.text = ` ${num} x ${c} = ${num * c}`
                tab.appendChild(item)
        }
    } 
}
