import Favorite from "../Components/Favorite"
import React from "react";
import { useSelector } from "react-redux";

const Favoris = () => {
    const { favorites } = useSelector(state => state)
    console.log(favorites)
    return (
        <>
        <div className="container-favoris">
            <div className="container-logo-title">
                <img className="logo-flix-favoris" src="/logo.png" alt=""/> 
                <h2 className="favoris-h2">Mes favoris</h2>   
            </div>
      
       
            <div className="card-favoris">
            {favorites.map((fav) =>
                <Favorite key={fav.id} fav={fav} />
            )}
            </div>
        </div>
       
       
        </>
    )
}

export default Favoris