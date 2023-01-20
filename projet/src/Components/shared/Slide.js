import React from 'react';

const Slide = ({movie, num}) => {
    
    return (
      <>
     {movie? 
     
                  (<> <div class={num == 0 ? "carousel-item active" : "carousel-item"}>
                    <div class="col-md-3">
                          <div class="card">
                              <div class="card-img">
                                  <img src={ "https://image.tmdb.org/t/p/original/" + movie.poster_path}class="img-fluid"/>
                              </div>
                              <div class="card-img-overlay">{movie.title}</div>
                          </div>
                      </div>
                  </div>

                  </>)
                    
                  : 
                  ( <h1>Aucun film</h1>)
                  
                  
    }
      </>
    );
};

export default Slide;