let STATE = {
    movie: undefined,
    movieGuess: undefined,
    checkedLetters: [],
    attempts: 5,
    //GAME_STATUS: 0, // 0->jugando, 1->he ganado, -1-> he perdido

    reset(movie) {
        this.movie = movie;
        this.movieGuess = movie.replaceAll(/[a-zA-z]/g, "*");
        this.checkedLetters = [];
        this.attempts = 5;
    },
};