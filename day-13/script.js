const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 100);

        randomSelect();
    }
});

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '')
        .map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 10;

    const interval = setInterval(() => {
        const tag = pickRandomTag();
        highlightTag(tag);
        setTimeout(() => {
            unhighlightTag(tag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        const tag = pickRandomTag();
        setTimeout(() => {
            highlightTag(tag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}