const joke = document.getElementById('joke');
const jokeButton = document.getElementById('jokeBtn');

generateJoke();

jokeButton.addEventListener('click', generateJoke);

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const response = await fetch('https://icanhazdadjoke.com/', config);
    const data = await response.json();
    joke.innerHTML = data.joke;
}