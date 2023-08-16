var seta1 = document.querySelector('#seta1')
var opção1 = document.querySelector('#opção1')

var seta2 = document.querySelector('#seta2')
var opção2 = document.querySelector('#opção2')

//funções para mostrar opções de meses ou ano
function ShowOption1(){
    opção1.style.display = 'flex'
    opção1.style.transition = '2s'
    seta1.style.rotate = '180deg'
    seta1.removeEventListener('click', ShowOption1)

    function HiddenOption1(){
        opção1.style.display = 'none'
        seta1.style.rotate = '0deg'
        seta1.removeEventListener('click', HiddenOption1)
        seta1.addEventListener('click', ShowOption1)
    }
    seta1.addEventListener('click', HiddenOption1)
}
seta1.addEventListener('click', ShowOption1)

function ShowOption2(){
    opção2.style.display = 'flex'
    seta2.style.rotate = '180deg'
    seta2.removeEventListener('click', ShowOption2)

    function HiddenOption2(){
        opção2.style.display = 'none'
        seta2.style.rotate = '0deg'
        seta2.removeEventListener('click', HiddenOption2)
        seta2.addEventListener('click', ShowOption2)
    }
    seta2.addEventListener('click', HiddenOption2)
}
seta2.addEventListener('click', ShowOption2)

var textAmAa = document.querySelector('#TextoAmAa')
var TextMA = document.querySelector('#TextoMA')
var AoMes = document.querySelector('#aomes')
var AoAno = document.querySelector('#aoano')
var Meses = document.querySelector('#meses')
var Anos = document.querySelector('#anos')
function InnerAM(){
    textAmAa.innerText = 'ao mês'
    TextMA.innerText = 'meses'
}
AoMes.addEventListener('click', InnerAM)
function InnerAa(){
    textAmAa.innerText = 'ao ano'
    TextMA.innerText = 'anos'

}
AoAno.addEventListener('click', InnerAa)
function InnerMes(){
    TextMA.innerText = 'meses'
    textAmAa.innerText = 'ao mês'
}
Meses.addEventListener('click', InnerMes)
function InnerAno(){
    TextMA.innerText = 'anos'
    textAmAa.innerText = 'ao ano'
}
Anos.addEventListener('click', InnerAno)

//fórmula de juros compostos M= C(1+i)^t
//a única diferença que ocorrerá de mensa para anual será se a respota final terá 'por mês' ou 'por ano'

var BTTCalcular = document.querySelector('#Calcular')

function ToCalcule(){
    var aporte = document.querySelector('#aportemensal')
    var SaldoIni = document.querySelector('#saldoinicial')
    var Taxa = document.querySelector('#taxaderedimento').value / 100
    var Prazo = document.querySelector('#prazo')
    SaldoIni = Number(SaldoIni.value)
    Prazo = Number(Prazo.value)
    aporte = Number(aporte.value)
    var Res = document.querySelector('#Res')
    
    do{            
        var rendimento = SaldoIni * Taxa
        SaldoIni = rendimento + aporte + SaldoIni
        Prazo --
    }while(Prazo > 0)
    SaldoIni = parseFloat(SaldoIni.toFixed(2))
    Res.innerText = 'Você terá '+SaldoIni+' Reais!'
}
BTTCalcular.addEventListener('click', ToCalcule)