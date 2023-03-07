var movieTitle = document.querySelector(".movie-title"),
    movieYear = document.querySelector(".movie-year"),
    movieGenre = document.querySelector(".movie-genre"),
    moviePlot = document.querySelector(".movie-plot"),
    moviePoster = document.querySelector(".movie-poster"),
    movieActors = document.querySelector(".actors"),
    movieRuntime = document.querySelector(".movie-runtime"),
    moviePoster = document.querySelector(".movie-poster");


function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function generate() {
    var movie = pad(Math.floor((Math.random() * 1155529) + 1), 7);
    fetch("http://www.omdbapi.com/?i=tt" + movie + "&apikey=6fdeb621")
    .then(res => res.json())
    .then(data => {
        if (data.Genre == "Adult, Short, N/A, Reality-TV, Game-Show, Talk-Show, News, Sport")
        skip();

        else
        movieTitle.innerHTML = data.Title;
        movieGenre.innerHTML = data.Genre;
        movieYear.innerHTML = data.Year;
        movieActors.innerHTML = data.Actors;
        moviePlot.innerHTML = data.Plot;
        movieRuntime.innerHTML = data.Runtime;
        moviePoster.src = data.Poster;
        console.log(data);
   }
    )
}


generate();



/**
 * function generate() {
    fetch("http://www.omdbapi.com/?t=mortal+kombat&apikey=6fdeb621")
   .then(res => res.json())
   .then(data => {
       movieTitle.innerHTML = data.Title;
   }
    )
}
 */