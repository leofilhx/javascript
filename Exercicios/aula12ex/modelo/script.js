function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.getElementById(`res`)
    if (fano.value.length == 0 || fano.value > ano) {
        alert (`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName (`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            genero = `um homem`
        } else if (fsex[1].checked) {
            genero = `uma mulher`
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}