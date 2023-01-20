import Favorite from "../shared/Favorite"
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
                
            </div>
      
            <h2 className="favoris-h2">Mes favoris</h2>  
            <div className="card-favoris">
           
               {
                 favorites.length > 0 ? (
                    favorites.map((fav) =>
                    <Favorite key={fav.id} fav={fav} />
                    )
                  ) : (
                    <h2>Aucun coup de coeur pour le moment </h2>
                  )
                  
               }
               
              
            </div>
        </div>
       
       
        </>
    )
}

export default Favoris