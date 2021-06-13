const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');
let clickTime = 0;
let numberOfLikes = 0;

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if(new Date().getTime() - clickTime < 800){
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');
    const left = e.clientX - e.target.offsetLeft;
    const top = e.clientY - e.target.offsetTop;
    heart.style.left = `${left}px`;
    heart.style.top = `${top}px`;
    loveMe.appendChild(heart);
    times.innerHTML = ++numberOfLikes;
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

