// --------------------------VARIABLES----------------------------------
const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
};

let bodyColor = null;
let btnStartIsActive = false;
refs.btnStop.disabled = true;
refs.btnStart.disabled = false;


// -----------------------------CALLS-----------------------------------
refs.btnStart.addEventListener('click', onStartBtnClick);
refs.btnStop.addEventListener('click', onStopBtnClick);



// --------------------------FUNCTIONS----------------------------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function onStartBtnClick() {
    refs.btnStop.disabled = false;
    refs.btnStart.disabled = true;

    bodyColor = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();

        console.log(`body color is ${getRandomHexColor()}`);
    }, 1000)
};


function onStopBtnClick() {
    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;

    clearInterval(bodyColor);
};

