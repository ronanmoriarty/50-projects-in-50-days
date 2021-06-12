const API_URL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');

async function getUser(username) {
    try {
        const  { data } = await axios(API_URL + username);
        createUserCard(data);
        getRepos(username);
    } catch (error) {
        if(error.response.status === 404) {
            createErrorCard('No profile found for username.')
        }
    }
}

async function getRepos(username) {
    try {
        const  { data } = await axios(API_URL + username + '/repos?sort=created');
        addReposToCard(data);
    } catch (error) {
        console.log(error);
        createErrorCard('Problem fetching repos.')
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const user = search.value;
    if(user) {
        getUser(user);
        search.value = '';
    }
});

function createUserCard(user) {
    const cardHtml = `<div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>`;
    main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
    const reposElement = document.getElementById('repos');
    repos
    .slice(0, 10)
    .forEach(repo => {
        const repoElement = document.createElement('a');
        repoElement.classList.add('repo');
        repoElement.innerText = repo.name;
        repoElement.href = repo.html_url;
        repoElement.target = '_blank';
        reposElement.appendChild(repoElement);
    });
}

function createErrorCard(message) {
    const cardHtml = `<div class="card">
      <h1>${message}</h1>
  </div>`;
    main.innerHTML = cardHtml;
}