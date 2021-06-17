const imagesContainer = document.querySelector('.images-container');
const images = document.querySelectorAll('.images-container img');
const maxIndex = images.length - 1;
const previous = document.querySelector('#left');
const next = document.querySelector('#right');
let index = 0;

let interval = setInterval(nextImage, 5000);

function nextImage() {
    increment();
    displayImage();
}

function increment() {
    index++;
    if(index > maxIndex) {
        index = 0;
    }
}

function decrement() {
    index--;
    if(index < 0) {
        index = maxIndex;
    }
}

function displayImage() {
    imagesContainer.style.transform = `translateX(-${index * 500}px)`;
}

previous.addEventListener('click', () =>{
    decrement();
    displayImage();
    clearInterval(interval);
    interval = setInterval(nextImage, 5000);
});

next.addEventListener('click', () =>{
    increment();
    displayImage();
    clearInterval(interval);
    interval = setInterval(nextImage, 5000);
});