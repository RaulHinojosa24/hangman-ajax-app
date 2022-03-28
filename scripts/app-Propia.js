let app_status = {
    film: {},
    user_input: [],
    attempts_left: 0,
    game_status: 0
}

if (localStorage.app_status) {
    app_status = JSON.parse(localStorage.app_status);
} else {
    console.log("entro");
    console.log(getFilm());
    console.log("salgo");
}

function updateLocalStorage() {
    localStorage.app_status = JSON.stringify(app_status);
}

async function getFilm(params) {
    return fetch("https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json")
        .then(response => response.json())
        .then(data => { return data[Math.floor(Math.random() * data.length)] })
}