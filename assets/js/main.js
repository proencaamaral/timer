function getTimerFromSecond(segundos) {
    const date = new Date(segundos*1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
console.log(getTimerFromSecond(10))
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function startTimer() {
        timer = setInterval(function () {
        segundos++
        relogio.innerHTML = getTimerFromSecond(segundos)
    }, 1000)
}


iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    startTimer();
});

pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado')
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
});