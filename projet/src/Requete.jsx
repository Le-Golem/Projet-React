import "axios";
import axios from "axios";
import { useState, useEffect } from "react";
import {topRatedMovies1 ,Films,Show} from "./api";

import Home from "./views/home";


const Requete = () => {
    const [movies1, setMovies1] = useState([]);
    const [movies2, setMovies2] = useState([]);
    const [Tv , setTv] = useState([]);

    useEffect(() => {
        axios.get(topRatedMovies1).then((response) => {
            setMovies1(response.data.results);
        });
        axios.get(Films).then((response) => {
            setMovies2(response.data.results);
        });
        axios.get(Show).then((response) => {
            setTv(response.data.results);
        });
    }, []);

    return (
        <>
            <Home  movies1={movies1} movies2={movies2} Tv={Tv}   /> 
        </>
    );
};

export default Requete;
