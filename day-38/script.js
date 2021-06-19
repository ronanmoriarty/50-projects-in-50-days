const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((listItem, index) => {
    listItem.addEventListener('click', (event) => {
        hideActiveItem();
        listItem.classList.add('active');

        hideCurrentImage();
        contents[index].classList.add('show');
    });
});

function hideActiveItem() {
    const activeItem = document.querySelector('.active');
    activeItem.classList.remove('active');
}

function hideCurrentImage() {
    const currentImage = document.querySelector('.show');
    currentImage.classList.remove('show');
}