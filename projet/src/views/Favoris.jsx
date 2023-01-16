import Favorite from "../components/Favorite"

const Favoris = ({favorites}) => {
    return (
        <>
        <h2>Favoris</h2>
        {favorites.map((fav) =>
            <Favorite key={fav.movie.id} fav={fav} />
        )}
        </>
    )
}

export default Favoris