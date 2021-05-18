const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggleElement = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

toggleElement.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
});

setTime();

function setTime() {
    const time = new Date();
    const month = months[time.getMonth()];
    const day = days[time.getDay()];
    const dateOfMonth = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const secondsRotation = 360 * (seconds / 60);
    const minutesRotation = 360 * (((minutes * 60) + seconds) / 3600);
    const hoursRotation = 360 * (((hours * 3600) + (minutes * 60) + seconds) / (12 * 60 * 60));
    secondElement.style.transform = `translate(-50%, -100%) rotate(${secondsRotation}deg)`;
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${minutesRotation}deg)`;
    hourElement.style.transform = `translate(-50%, -100%) rotate(${hoursRotation}deg)`;
    timeElement.innerHTML = `${hoursForClock.toString().padStart(2, "0")}:${minutes}:${seconds.toString().padStart(2, "0")} ${ampm}`;
    dateElement.innerHTML = `${day}, ${month} <span class="circle">${dateOfMonth}</span>`;
}

setInterval(setTime, 1000);