import MovieList from "../MovieList";

const Home = ({movies1,movies2,Tv}) => {
    return (
        <>
            <MovieList movies1={movies1} movies2={movies2} Tv={Tv} />
        </>
    );
};

export default Home;