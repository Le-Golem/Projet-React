import React from 'react';
import bootstrap from 'bootstrap'
const Card = ({movie}) => {
    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/");
      };
      let style = {
      with: '18rem',
      backgroundImage: `url("${ movie.poster_path
           ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
           : "./img/poster.jpg" }")`,
           backgroundSize: 'cover'
      }
    return (



<div className="card" style={style}>
    <span>+</span>
  <div className="card-body">
    <h5 className="card-title">{movie.title}</h5>
    {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : null}
      <a href={`details/${movie.id}` }  class="card-link" >test</a>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

    );
};

export default Card;