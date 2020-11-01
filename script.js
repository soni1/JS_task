const APIKEY = "3a98eacfa2137f654f74ebd13657abfc";

//getting list of movies from https://developers.themoviedb.org/3/discover/movie-discover
const APIURL ="https://api.themoviedb.org/3/discover/movie?api_key=3a98eacfa2137f654f74ebd13657abfc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w500";
const main = document.querySelector("main");

async function fetchMovies() {
  const resp = await fetch(APIURL);
  const data = await resp.json();
  data.results.forEach((movie)=>{
      const {poster_path, title, vote_average} = movie;
      const movieBox = document.createElement("div") ;
      movieBox.classList.add("movie")
      movieBox.innerHTML = `
        <img
            src="${IMGPATH + poster_path}"
            alt="${title}"
        />
        <div class="movie-detail">
            <h3>${title}</h3>
            <span>${vote_average}</span>
        </div> `;

        main.appendChild(movieBox)
  })

  /*
     //getting images and appending to body 
   data.results.forEach((movie)=>{
       const movieBox= document.createElement("div")
       movieBox.classList.add("movie")
       const img = document.createElement("img")
       img.src=IMGPATH + movie.poster_path
       document.body.appendChild(img)
   })

   */
  return data;
}
fetchMovies();
