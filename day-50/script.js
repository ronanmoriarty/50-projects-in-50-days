const screens = document.querySelectorAll('.screen');
const chooseInsectButtons = document.querySelectorAll('.choose-insect-btn');
const startButton = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');

let seconds = 0;
let score = 0;
let selectedInsect = {};

startButton.addEventListener('click', () => {
    screens[0].classList.add('up');
});

chooseInsectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const image = btn.querySelector('img');
        const src = image.getAttribute('src');
        const alt = image.getAttribute('alt');
        selectedInsect = { src, alt };
        screens[1].classList.add('up');
        setTimeout(createInsect, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeElement.innerHTML = `Time ${m}:${s}`;
    seconds++;
}

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    const image = document.createElement('img');
    image.src = selectedInsect.src;
    image.alt = selectedInsect.alt;
    image.style.transform = `rotate(${Math.random() * 360}deg)`;
    insect.appendChild(image);
    insect.addEventListener('click', catchInsect);
    gameContainer.appendChild(insect);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
    addInsects();
}

function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore() {
    score++;
    scoreElement.innerHTML = `Score: ${score}`;
    if(score > 19) {
        messageElement.classList.add('visible');
    }
}