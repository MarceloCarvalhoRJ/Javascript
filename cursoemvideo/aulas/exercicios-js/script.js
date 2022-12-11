function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora<12) {
        img.src = 'imagens/amanhecer_redondo.png' //BOM DIA!
        document.body.style.background = '#d2d5a2'
    }else if (hora >=12 && hora <18) {
        img.src = 'imagens/entardecer_redondo.png' //BOA TARDE!
        document.body.style.backgroundColor = '#fd989c'
    } else {
        img.src = 'imagens/anoitecer_redondo.png' //BOA NOITE!
        document.body.style.backgroundColor = '#515154'
    } 
}