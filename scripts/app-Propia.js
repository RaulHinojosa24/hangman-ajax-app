// Variable de estado con datos necesarios para seguir tracking del progreso del juego
let app_status = {
    film: "",
    user_input: [],
    attempts_left: 5,
    game_status: 0,

    // Funcion para resetear la variable de estado con valores de 0 y una pelicula nueva
    getFilm(title) {
        // fetch("https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json")
        //     .then(response => response.json())
        //     .then(data => { this.film = data[Math.floor(Math.random() * data.length)]; });

        this.film = { title: title };
        this.user_input = [];
        this.attempts_left = 5;
        this.game_status = 0;
    }
}

// Comprobar si ya habia una sesión anterior. Si existia, cargarlo, si no, crear una nueva. Iniciar el juego.
if (localStorage.app_status) {
    let local = JSON.parse(localStorage.app_status);

    app_status.film = local.film;
    app_status.user_input = local.user_input;
    app_status.attempts_left = local.attempts_left;
    app_status.game_status = local.game_status;
} else {
    app_status.getFilm("Harry Potter");
}

// Load app_status content
loadUserInput(app_status.user_input);
loadFilmOnScreen(app_status.film.title);
loadAttemptsLeft(app_status.attempts_left);

// Listener para que si le da click a "Reset", hacer un reset del juego
document.querySelector("#reset").addEventListener("click", () => {
    app_status.getFilm("Yo robot");
    updateLocalStorage();
    loadFilmOnScreen(app_status.film.title);
});

// Listener para pillar las teclas que pulsa el usuario
document.addEventListener("keyup", (e) => {
    // Si no son letras, no hacer nada
    if (!e.key.match(/^[a-zñ]{1}$/i)) {
        return;
    }

    // Si son letras, hacer los cambios pertinentes(añadir a app_status.user_input, actualizar localStorage, mostrarlo en pantalla, mostrar titulo pelicula actualizado)
    onUserInput(e.key);
    updateLocalStorage();
    loadUserInput(app_status.user_input);
    loadFilmOnScreen(app_status.film.title);
});

function loadFilmOnScreen(film) {
    const puzzle = document.querySelector("#puzzle");
    puzzle.innerHTML = "";

    for (const letter of film) {
        let char = (app_status.user_input.find(x => x.toLowerCase() == letter.toLowerCase()) || letter == " ") ? letter : "*";
        puzzle.innerHTML += `<span>${char}</span>`;
    }
}

function loadUserInput(letters) {
    document.querySelector("#letters-tried").innerHTML = "";
    if (letters.length == 0) return;
    letters.forEach(letter => {
        document.querySelector("#letters-tried").innerHTML += letter;
    });
}

function loadAttemptsLeft(attempts) {
    document.querySelector("#guesses").innerHTML = `Intentos restantes: ${attempts}`;
}

function onUserInput(letter) {
    app_status.user_input.push(letter);
}

function updateLocalStorage() {
    localStorage.app_status = JSON.stringify(app_status);
}