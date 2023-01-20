const apiKey = "65bb91b037f20d50a722883e4a68fe58";

export const topRatedMovies1 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr-fr&page=1`;
export const allMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr-fr&page=`;
export const Films           = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
export const Séries          =  `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr-fr&page=1`
export const Séries2         =  `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr-fr&page=2`

export const Horror = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=horror` 
export const Action = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28` 
export const SF = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878`
export const HorrorS = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=18`