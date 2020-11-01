const APIKEY = "3a98eacfa2137f654f74ebd13657abfc";

//getting list of movies from https://developers.themoviedb.org/3/discover/movie-discover
const APIURL= "https://api.themoviedb.org/3/discover/movie?api_key=3a98eacfa2137f654f74ebd13657abfc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w500"

async function fetchMovies(){
   const resp =  await fetch (APIURL);
   const data = await resp.json();
   //getting images and appending to body 
   data.results.forEach((movie)=>{
       const img = document.createElement("img")
       img.src=IMGPATH + movie.poster_path
       document.body.appendChild(img)
   })
   return data;
}
fetchMovies();
