import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Card from '../shared/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("c");
   useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=65bb91b037f20d50a722883e4a68fe58&query=${search}&language=fr-FR`)
    .then((res) => setMoviesData(res.data.results))
   },[search])

    console.log(moviesData)
    console.log(search)
    return (
        <div className="form-component">
           <div className="container-logo-title">
                <img className="logo-flix-favoris" src="./logo.png" alt=""/> 
                  
            </div>
         <div className="wrapper">
     <div className="container">
      <form role="search" method="get" className="search-form form" action="">
        <label>
            <span className="screen-reader-text">Search for...</span>
            <input type="text" className="search-field" onChange={(e) => setSearch(e.target.value)} placeholder="Recherchez votre film..."  name="s" title="" />
        </label>
        <button className="search-submit button" value="&#xf002" type='submit'  > <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
     </form>
    
     </div>
   </div>
        <div className="result">
          
        {moviesData.length > 0 ?
       (

        moviesData
          .slice(0, 12)

          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))
       ) : (  <h1> Aucun Resultats</h1>) }
        </div>
      </div>
     
    );
};

export default Search;