import React from 'react';
import bootstrap from 'bootstrap'
import { addFavoris } from '../../actions/FavoriteActions';
import { useDispatch } from "react-redux";

const Card = ({movie}) => {

  const dispatch = useDispatch();
    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/");
      };


      
      let style = {
      with: '18rem',
      backgroundImage: `url("${ 
          movie?.poster_path
           ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
           : "../../assets/img/ter.png" }")`,
           backgroundSize: 'cover'
      }

    return (
<div className="card" style={style}>
   <div>
    <button className="button-addfav" onClick={() => dispatch(addFavoris(movie))}>+</button>
   </div>
   <div className="card-body">
    <h5 className="card-title">{movie.title}</h5>
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : null}
      <a href={`details/${movie.title.replace(/\s/g, "-")}/${movie.id}` }  class="card-link" >Details</a>
   
    <p className="card-text">{movie.overview ? movie.overview : "Aucun synopsis"}</p>
    
  </div>
</div>

    );
};

export default Card;