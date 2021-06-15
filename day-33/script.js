const addButton = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));
console.log(notes);
if(notes) {
    notes.forEach(note => addNewNote(note));
}

addButton.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<div class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>`;

    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    textArea.value = text;
    main.innerHTML = marked(text);

    deleteButton.addEventListener('click', () => {
        note.remove();
        UpdateLocalStorage();
    });

    editButton.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('change', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        UpdateLocalStorage();
    });

    document.body.appendChild(note);
}

function UpdateLocalStorage() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => notes.push(note.value));
    // console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
}