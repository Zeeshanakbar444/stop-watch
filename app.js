var mintElement = document.querySelector('#mintElement')
var secElement = document.querySelector('#secElement')
var msecElement = document.querySelector('#msecElement')

var mint = 0;
var sec = 0;
var msec = 0;
var intreval;

/////////// button

var startBtn = document.getElementById('startBtn')
var stopBtn = document.getElementById('stopBtn')
var resetBtn = document.getElementById('resetBtn')


function startTimer() {
    msec++
    msecElement.innerHTML = msec;

    if (msec >= 100) {
        msec = 0;
        sec++;
        secElement.innerHTML = sec
        if (sec < 10) {
            secElement.innerHTML = `0${sec}`
        }
    } else if (sec >= 59) {
        sec = 0;
        mint++
        mintElement.innerHTML = mint;
        if (mint < 10) {
            mintElement.innerHTML = `0${mint}`;
        }
    }

    startBtn.style.display = 'none'
}

function start() {
    intreval =   setInterval(startTimer, 10)
}

function stopInt(){
    clearInterval(intreval)
    startBtn.style.display = 'block'
}
function reset(){
    clearInterval(intreval);
    mint =0
    msec =0
    sec = 0
    mintElement.innerHTML = `0${mint}`
    secElement.innerHTML = `0${sec}`
    msecElement.innerHTML = `0${msec}`
    startBtn.style.display = 'block'
}