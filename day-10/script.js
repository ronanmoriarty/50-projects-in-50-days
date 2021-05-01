const joke = document.getElementById('joke');
const jokeButton = document.getElementById('jokeBtn');

generateJoke();

jokeButton.addEventListener('click', generateJoke);

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com/', config)
        .then(res => res.json())
        .then(data => {
            joke.innerHTML = data.joke;
        });
}