import MovieList from "../MovieList";
// import Footer from "../components/Footer";

const Home = ({movies1,movies2}) => {
    return (
        <>
            <MovieList movies1={movies1} movies2={movies2} />
        </>
    );
};

export default Home;