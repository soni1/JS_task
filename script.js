const APIKEY = "3a98eacfa2137f654f74ebd13657abfc";

//getting list of movies from https://developers.themoviedb.org/3/discover/movie-discover
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=3a98eacfa2137f654f74ebd13657abfc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w500";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=3a98eacfa2137f654f74ebd13657abfc&query=";

const main = document.querySelector("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//when page loads show favourite movies first
fetchMovies(APIURL);

async function fetchMovies(url) {
  const resp = await fetch(url);
  const data = await resp.json();
  searchMovies(data.results);
}

function searchMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, vote_average } = movie;
    const movieBox = document.createElement("div");
    movieBox.classList.add("movie");
    movieBox.innerHTML = `
          <img
              src="${IMGPATH + poster_path}"
              alt="${title}"
          />
          <div class="movie-detail">
              <h3>${title}</h3>
              <span>${vote_average}</span>
          </div> `;

    main.appendChild(movieBox);
  });
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const searchText = search.value;
  if (searchText) {
    fetchMovies(SEARCHAPI + searchText);
    search.value = "";
  }
});
