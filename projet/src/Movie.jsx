const Movie = ({movie}) => {

    console.log(movie.poster_path)
    return (
        <div style={{ marginRight: "1em", marginLeft: "1em" }} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                {movie.title}
        </div>
    );
};

export default Movie;