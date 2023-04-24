let mint = 0;
let sec = 0;
let mSec = 0;
let mintHead = document.getElementById('mint');
let secHead = document.getElementById('sec');
let miliHead = document.getElementById('msec');
let interval;

function timer() {
    mSec++;
    miliHead.innerHTML = mSec
    if (mSec >= 100) {
        mSec = 0
        sec++
        secHead.innerHTML = sec
    }
    else if (sec >= 60) {
        sec = 0;
        mint++;
        mintHead.innerHTML = mint
    }
    else if (sec <= 9) {
        secHead.innerHTML = `0${sec}`
    }
    else if (mint <= 9) {
        mintHead.innerHTML = ` 0${mint}`
    }
}



let start = () => {
    interval = setInterval(timer, 10)
}

let pause = () => {
    clearInterval(interval)
}
let restart = () => {
    mint = 0;
    sec = 0;
    mSec = 0;
    miliHead.innerHTML = mint;
    secHead.innerHTML = sec;
    miliHead.innerHTML = mSec
}