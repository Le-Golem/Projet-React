import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Movie from "./Movie";

const MovieList = ({movies1, movies2 ,Tv}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <>
        <button    ></button>
        <h2>Top des mieux notés</h2>
            <Slider {...settings}>
                {movies1.length > 0 && movies1.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </Slider>

            <h2>Les plus populaires </h2>
            <Slider {...settings}>
                {movies2.length > 0 && movies2.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </Slider>
            <Slider {...settings}>
                {Tv.length > 0 && Tv.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </Slider>
        </>
    );
};

export default MovieList;
