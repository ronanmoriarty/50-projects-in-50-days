const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'));
if(todos) {
    todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

    if(todoText) {
        const todoElement = document.createElement('li');

        if(todo && todo.completed) {
            todoElement.classList.add('completed');
        }

        todoElement.innerText = todoText;

        todoElement.addEventListener('click', () => {
            todoElement.classList.toggle('completed');
            updateLocalStorage();
        });
        todoElement.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            todoElement.remove();
            updateLocalStorage();
        });
        todosUL.appendChild(todoElement);

        input.value = '';
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    todoListItems = document.querySelectorAll('li');
    const todosToStore = [];
    todoListItems.forEach(listItem => {
        todosToStore.push({
            text: listItem.innerText,
            completed: listItem.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todosToStore));
}