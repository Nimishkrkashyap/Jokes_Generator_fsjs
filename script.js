const jokeElem = document.getElementById('joke')
const URL = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'

async function getJoke() {
    try {
        const res = await fetch(URL, {
            method: 'GET',
            headers: {
                'content-type': "application/json"
            }
        })
        const jokeRes = await res.json()
        jokeElem.innerHTML = jokeRes.joke
    } catch (error) {
        console.log(error)   
    }
}