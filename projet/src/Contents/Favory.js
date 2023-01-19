import React from "react";
import Favorite from "../Components/Favorite"
// import { useSelector } from "react-redux";
// import FavoriteReducer from "../reducers/FavoriteReducer";

function Favory({favorites}) {
  console.log("fav" + favorites);
  return (
  <>
  <div className="Favory">Favoris</div>
  {favorites.map((fav) =>
    <Favorite key={fav.movie.id} fav={fav} />
  )}
  </>

  

  )

}

export default Favory;
