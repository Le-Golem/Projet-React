import { deleteFavoris } from "../../actions/FavoriteActions"
import { useDispatch } from "react-redux" 
import React from "react";

const Favorite = ({ fav }) => {
    const dispatch = useDispatch()
    return (
        <>
        <div>
            <img className="img-favoris" src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`} alt={fav.movie} />
         <div>
             <button className="button-deletefav" style={{ cursor: "pointer" }} onClick={() => dispatch(deleteFavoris({ fav }))}>X
                {fav.movie}
                </button>
         </div>
                
        </div>  
       
    </>
    )
}

export default Favorite