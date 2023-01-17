import React from 'react';
import axios from 'axios'

const Home = () => {
    
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=65bb91b037f20d50a722883e4a68fe58')
    .then((res) => console.log(res))
    return (
        <div>
            
        </div>
    );
};

export default Home;