let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#Lista')
let res = document.getElementById('res')
let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 1000){
        return true
        } else{
        return false
    }
}
function inlista(n, l){
    if (l.indexOf(Number(n)) != -1)
    {
        return true
    } else{
        return false
    }

}

function adicionar(){
 if(isNumero (num.value) && !inlista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text =  `Valor ${num.value} adicionado.`
    lista.appendChild(item);
    res.innerHTML = ''
 } else{
    window.alert('Valor inválido')
 }
num.value = ''
num.focus()
}

function verificar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de prosseguir')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let dps in valores){
            
            soma += valores[dps]
            
            if(valores[dps] > maior)
                maior = valores[dps]
            if(valores[dps] < menor)
                menor = valores[dps]

        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> ${total} números cadastrados </p>.`
        res.innerHTML += `<p> O maior número é: ${maior} <br> 
        e o menor é ${menor}</p>.`
        res.innerHTML += `<p> valor total = ${soma} </p>.`
        res.innerHTML += `<p> A média é: ${media} </p>.`
     
    }

}

