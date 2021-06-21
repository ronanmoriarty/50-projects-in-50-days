const result = document.getElementById('result');
const filter = document.getElementById('filter');
const loading = document.getElementById('loading');
const listItems = [];

getData();

async function getData () {
    const URL = "https://randomuser.me/api/?results=10";
    const response = await fetch(URL);
    const { results } = await response.json();
    result.innerHTML = '';
    results.forEach(appendUser);
    loading.classList.add('hide');
}

function appendUser(user) {
    const listItem = document.createElement('li');
    listItems.push(listItem);
    listItem.innerHTML = `<img src="${user.picture.medium}" alt="${user.name.first}">
    <div class="user-info">
      <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>`;
    result.appendChild(listItem);
}

filter.addEventListener('input', async (event) => {
    const searchTerm = event.target.value.toUpperCase();
    listItems.forEach(listItem => {
        const name = listItem.querySelector('h4').innerHTML.toUpperCase();
        if(!name.toUpperCase().includes(searchTerm)) {
            listItem.classList.add('hide');
        } else {
            listItem.classList.remove('hide');
        }
    });
});