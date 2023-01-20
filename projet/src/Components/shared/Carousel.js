import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slide from './Slide';

const Carousel = ({genre}) => {
    const [filterMovie, setFilterMovie] = useState([])  
 useEffect(() => {
    const getData =  () => 
    {
        axios.get( `https://api.themoviedb.org/3/discover/movie?api_key=65bb91b037f20d50a722883e4a68fe58&with_genres=${genre} `) 
       .then((res) => setFilterMovie(res.data.results ))
    }
    getData()
 },[genre])
    console.log(genre)
    console.log(filterMovie)


    return (
				<div class="carousel-inner" role="listbox">
                   {  filterMovie.map((elm, index ) => {

		    	    return (<Slide movie={elm} key={index} num={index} />	)

                 })}  					
	           </div>
  

    );
};

export default Carousel;