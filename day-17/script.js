const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=91140fe8703da81963083f8da5a614fa&page=1';
const IMAGE_URL='https://image.tmdb.org/t/p/w1280';
const SEARCH_API='https://api.themoviedb.org/3/search/movie?api_key=91140fe8703da81963083f8da5a614fa&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `<img src="${IMAGE_URL + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>`;
        main.appendChild(movieElement);
    });
}

function getClassByRate(rating) {
    if (rating > 8) {
        return 'green';
    } else if (rating > 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm + '"');
        search.value = '';
    } else {
        window.location.reload();
    }
});
