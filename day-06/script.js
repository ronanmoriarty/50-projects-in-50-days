const boxes = document.querySelectorAll('.box');

checkBoxes();

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const threshold = window.innerHeight * 4 / 5;
    boxes.forEach(box => {
        if(box.getBoundingClientRect().top < threshold) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}