//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Movie from "./Movie";
import { useEffect } from "react";
//import Nav from "./Components/Nav";


const MovieList = ({movies, movieGenres, topRatedMovies, popularMovies, popularTvShows, topRatedTvShows }) => {

    const [display, setDisplay] = useState('films');
    const [moviesByGenre, setMovieByGenre] = useState([])
    // Au chargement du composant et dès que movies et movieGenres sont mis à jour, 
    useEffect( () => {
        //si movies et moviesGenres existent 
       if(movies && movieGenres) {
        // on initialise un tableau vide 
        let initMoviesByGenre = []
        // pour chaque genres de films 
        movieGenres.forEach(genre => {
            // pousse dans le tableau un objet avec une propriété genre qui stocke le nom du genre 
            // et une propriété movies qui stocke tous les films qui ont le genre parcouru par la bloucle
            initMoviesByGenre.push({
                genre:genre.name,
                movies:movies.filter(movie => movie.genre_ids.includes(genre.id))
            })
        }) 
        // on défini le state movieByGenre en lui donnant comme valeur le tableau qu'on vient de construire
        setMovieByGenre(initMoviesByGenre)
       }
        
    },[movies, movieGenres])
console.log(moviesByGenre)

    return (
        <>
        <div className="button-homepage">
            <button className="series" onClick={() => setDisplay('series')}>Séries</button>
            <button className="films" onClick={() => setDisplay('films')}>Films</button>
        </div>
        
    <h4 className="title-homepage-first">Top des mieux notés</h4>
    <div className="slider-style-movie1">

        {topRatedMovies && topRatedMovies.length > 0 && topRatedMovies.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="250" height="auto"/>)}
    </div>


    <h4 className="title-homepage">Les plus populaires </h4>
    <div className="slider-style">
           
        {popularMovies && popularMovies.length > 0 && popularMovies.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="250" height="auto"/>)}
    </div>

        {/* Pour chaque film par genres, on affiche un titre avec le nom du genre et on parcours tous les films du genre pour les afficher */}
        {moviesByGenre.length > 0 && moviesByGenre.map((movieGenre, i)=> (
            <>
             <h4 className="title-homepage">{movieGenre.genre}</h4>
            <div className="slider-style">
               
                {movieGenre.movies.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="250" height="auto"/>)}
            </div>
            </>
        ))}

    {/* <div className="slider-style">
            <h2>Séries</h2>
        {séries.length > 0 && séries.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="250" height="auto"/>)}
    </div>


    <div className="slider-style">
         <h2>Horror</h2>
       {Horror1 && Horror1.length > 0 && Horror1.map((movie) => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="250" height="auto"/>)}
    </div>


    <div className="slider-style">
    <h2>Action</h2>
       {Action1 && Action1.length > 0 && Action1.map((movie) => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="250" height="auto"/>)}
    </div> */}

   

   
    {display === 'series' && <div>
    <h2>Les Séries populaires </h2>
            {/* <Slider {...settings}>
                {séries.length > 0 && séries.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </Slider> */}
    <h2>Les Séries populaires 2</h2>
            {/* <Slider {...settings}>
                {séries2.length > 0 && séries2.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </Slider> */}
        </div>}
    
        </>
    );
};

export default MovieList;
