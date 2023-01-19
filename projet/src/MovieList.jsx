import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from 'react';
import Movie from "./Movie";
import Nav from "./Components/Nav";

const MovieList = ({movies1, movies2, séries , séries2 }) => {

    const [display, setDisplay] = useState('films');

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <>

        <button className="series" onClick={() => setDisplay('series')}>Séries</button>
        <button className="films" onClick={() => setDisplay('films')}>Films</button>
    
        {display === 'series' && <div>
        <h2>Les Séries populaires </h2>
                <Slider {...settings}>
                    {séries.length > 0 && séries.map((movie) => <Movie key={movie.id} movie={movie} />)}
                </Slider>
        <h2>Les Séries populaires 2</h2>
                <Slider {...settings}>
                    {séries2.length > 0 && séries2.map((movie) => <Movie key={movie.id} movie={movie} />)}
                </Slider>
            </div>}
        {display === 'films' && <div>
    
        <h2>Top des mieux notés</h2>
                <Slider {...settings}>
                    {movies1.length > 0 && movies1.map((movie) => <Movie key={movie.id} movie={movie} />)}
                </Slider>
    
                <h2>Les plus populaires </h2>
                <Slider {...settings}>
                    {movies2.length > 0 && movies2.map((movie) => <Movie key={movie.id} movie={movie} />)}
                </Slider>
    
            </div>}
    
    
            </>
    );
};

export default MovieList;