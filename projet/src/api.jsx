const apiKey = "65bb91b037f20d50a722883e4a68fe58";

export const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=fr-fr&page=1`;
export const allMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-fr&page=`;
export const popularMoviesUrl           = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
export const popularTvShowsUrl         =  `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr-fr&page=1`
export const popularTvShowsUrl2        =  `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr-fr&page=2`

export const movieGenresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`