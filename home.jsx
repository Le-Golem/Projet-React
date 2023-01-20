

import MovieList from "./MovieList";

const Home = ({movies1,movies2,séries,séries2,Horror1,Action1,SF1,Horror2, allMovies}) => {
    //console.log(movies1)
    return (
        <>
  
            <MovieList movies1={movies1} movies2={movies2} séries={séries} séries2={séries2} Horror1={Horror1} Action1={Action1} SF1={SF1} Horror2={Horror2} allMovies={allMovies} />
        </>
    );
  };
  export default Home;