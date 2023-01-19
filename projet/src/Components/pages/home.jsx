import Nav from "../Nav";
import MovieList from "../../MovieList";

const Home = ({movies1,movies2,séries,séries2}) => {
    console.log(movies1)
    return (
        <>
   
            <MovieList movies1={movies1} movies2={movies2} séries={séries} séries2={séries2} />
        </>
    );
};
export default Home;