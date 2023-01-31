// ---------------------------IMPORTS-----------------------------------
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// --------------------------VARIABLES----------------------------------
const refs = {
    input: document.querySelector('#datetime-picker'),
    button: document.querySelector('[data-start]'),
    timerField: document.querySelector('.timer'),
    daysValue: document.querySelector('[data-days]'),
    hoursValue: document.querySelector('[data-hours]'),
    minutesValue: document.querySelector('[data-minutes]'),
    secondsValue: document.querySelector('[data-seconds]'),
    button: document.querySelector('button')
};

refs.button.setAttribute('disabled', true);

const TIMER_DELAY = 1000;
let timerId = null;
let currentDate = null;
let selectedDate = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];

        if (selectedDate < new Date()) {
            Notify.warning(`Please choose a date in the future 📅`);
            return;
        } else {
            refs.button.removeAttribute('disabled');
        }
    },
};


// -----------------------------CALLS-----------------------------------
flatpickr(refs.input, options);

//  event
refs.button.addEventListener('click', onBtnClick);


// --------------------------FUNCTIONS----------------------------------
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}


// f для перевірки чи двозначне число
function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}


function onBtnClick() { 
    timerId = setInterval(() => {
        currentDate = new Date();
        const deltaTime = selectedDate.getTime() - currentDate.getTime();
        const convertedData = convertMs(deltaTime);

        if (currentDate < selectedDate) {
            refs.daysValue.innerHTML = convertedData.days;
            refs.hoursValue.innerHTML = convertedData.hours;
            refs.minutesValue.innerHTML = convertedData.minutes;
            refs.secondsValue.innerHTML = convertedData.seconds;
        } else {
            clearTimeout(timerId);
        }

    }, TIMER_DELAY)
};


// --------------------------MARKUP----------------------------------
const timerContainer = document.querySelector('.timer-container');
    timerContainer.style.backgroundColor = '#ffff66';
    timerContainer.style.border = '3px solid #b3ffd9';
    timerContainer.style.borderRadius = '6px';
    timerContainer.style.boxShadow = '12px 12px 2px 1px #ccffe6'; 
    timerContainer.style.padding = '25px';
    timerContainer.style.width = '400px';
    timerContainer.style.height = '200px';
    timerContainer.style.display = 'flex';
    timerContainer.style.flexDirection = 'column';
    timerContainer.style.justifyContent = 'center';
    timerContainer.style.margin = 'auto';

// input
    refs.input.style.border = '2px solid #b3ffd9';
    refs.input.style.width = '275px';
    refs.input.style.height = '30px';
    refs.input.style.borderRadius = '4px';
    refs.input.style.backgroundColor = '#ccffe6';
    refs.input.style.textAlign = 'center';
    refs.input.style.fontSize = '16px';
    refs.input.style.color = '#00b377';

// btn
    refs.button.style.cursor = 'grab';
    refs.button.style.border = '2px solid #b3ffd9';
    refs.button.style.width = '65px';
    refs.button.style.height = '30px';
    refs.button.style.borderRadius = '4px';
    refs.button.style.backgroundColor = '#ccffe6';
    refs.button.style.fontSize = '14px';
    refs.button.style.textTransform = 'uppercase';
    refs.button.style.color = '#00b377';


// timer
    refs.timerField.style.border = '3px solid #b3ffd9';
    refs.timerField.style.marginTop = '15px';
    refs.timerField.style.display = 'flex';
    refs.timerField.style.flexDirection = 'row';
    refs.timerField.style.gap = '20px';
    refs.timerField.style.justifyContent = 'center';
    refs.timerField.style.fontSize = '16px';
    refs.timerField.style.textTransform = 'uppercase';
    refs.timerField.style.color = '#00b377';
    refs.timerField.style.border = '3px solid #b3ffd9';
    refs.daysValue.style.fontSize = '50px';
    refs.hoursValue.style.fontSize = '50px';
    refs.minutesValue.style.fontSize = '50px';
    refs.secondsValue.style.fontSize = '50px';
