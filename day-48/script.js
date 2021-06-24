const container = document.querySelector('.container');
const unsplashUrl = 'https://source.unsplash.com/random/';
const rows = 10;

async function getImages() {
    for (let i = 0; i < rows * 3; i++) {
        const imageElement = document.createElement('img');
        const url = `${unsplashUrl}${getRandomSize()}`;
        const response = await fetch(url);
        if(response.status === 200) {
            console.log(response);
            imageElement.src = response.url;
            container.appendChild(imageElement);
        }
    }
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
    return (Math.floor(Math.random()) * 10) + 300;
}

getImages();