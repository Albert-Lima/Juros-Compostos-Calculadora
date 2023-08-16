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
}
AoMes.addEventListener('click', InnerAM)
function InnerAa(){
    textAmAa.innerText = 'ao ano'
}
AoAno.addEventListener('click', InnerAa)
function InnerMes(){
    TextMA.innerText = 'meses'
}
Meses.addEventListener('click', InnerMes)
function InnerAno(){
    TextMA.innerText = 'anos'
}
Anos.addEventListener('click', InnerAno)

