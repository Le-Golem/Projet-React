
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = '65bb91b037f20d50a722883e4a68fe58';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setMovies(res.data.results);
      })
  }, [])

  return (
    <div>
      {movies.map(movie =>
        <div key={movie.id}>
          {movie.title}
        </div>
      )}
    </div>
  );
}