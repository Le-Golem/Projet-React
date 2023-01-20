import "axios";
import axios from "axios";
import { useState, useEffect } from "react";
import {topRatedMoviesUrl ,allMoviesUrl ,popularMoviesUrl,popularTvShowsUrl, popularTvShowsUrl2, movieGenresUrl} from "./api";
import Home from "./Components/pages/home";
import MovieList from "./MovieList";


const Requete = () => {
    const [movies, setMovies] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);

    const [popularMovies, setPopularMovies ] = useState([]);
    const [topRatedMovies, setTopRatedMovies ] = useState([]);

    const [popularTvShows, setPopularTvShows] = useState([]);
    const [topRatedTvShows, setTopRatedTvShows] = useState([]);
  

    useEffect(() => {
        let cumulatedMovies = []

        for( let p = 1; p < 21; p++){
            axios.get(allMoviesUrl+p).then((response) => {
                response.data.results.forEach(movie => {
                    cumulatedMovies.push(movie)
                })
              
            })
        }

        setMovies(cumulatedMovies)
        axios.get(topRatedMoviesUrl).then((response) => {
            setTopRatedMovies(response.data.results);
        });
        axios.get(popularMoviesUrl).then((response) => {
            setPopularMovies(response.data.results);
        });
        axios.get(popularTvShowsUrl).then((response) => {
            setPopularTvShows(response.data.results);
        });
        axios.get(popularTvShowsUrl2).then((response) => {
            setTopRatedTvShows(response.data.results);
        });
        axios.get(movieGenresUrl).then((response) => {
            setMovieGenres(response.data.genres);
        });
    }, []);

    
    return (
        <>
           
            <MovieList movies={movies} movieGenres={movieGenres} topRatedMovies={topRatedMovies} popularMovies={popularMovies} popularTvShows={popularTvShows} topRatedTvShows={topRatedTvShows}/> 

            {/* <Home  movies1={movies1} movies2={movies2} séries={séries} séries2={séries2} Horror1={Horror1} Action1={Action1} SF1={SF1} Horror2={Horror2} allMovies={allMoviesList}/> */}
        </>
    );
};

export default Requete;