const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendButton = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

function removeActive() {
    for (let index = 0; index < ratings.length; index++) {
        ratings[index].classList.remove('active');
    }
}

sendButton.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br/>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `;
});