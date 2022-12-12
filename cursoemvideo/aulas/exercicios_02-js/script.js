function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fano.value.lenght == 0 || fano.value >= ano || fano.value < '1900') {
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = (ano - Number(fano.value))
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebe-masc.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-masc.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-masc.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'adulto-masc.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-masc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebe-masc.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-fem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-fem.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'adulto-fem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
