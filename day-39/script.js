const passwordElement = document.getElementById('password');
const backgroundElement = document.getElementById('background');

passwordElement.addEventListener('input', (e) => {
    const input = e.target.value;
    let blur = 20 - input.length * 2;
    if(blur < 0) {
        blur = 0;
    }
    console.log(blur);
    backgroundElement.style.filter = `blur(${blur}px)`;
});