import "axios";
import axios from "axios";
import { useState, useEffect } from "react";
import {topRatedMovies1 ,Films ,Séries,Séries2} from "./api";

import Home from "./views/home";


const Requete = () => {
    const [movies1, setMovies1] = useState([]);
    const [movies2, setMovies2] = useState([]);
    const [séries, setSéries ] = useState([]);
    const [séries2, setSéries2 ] = useState([]);

    useEffect(() => {
        axios.get(topRatedMovies1).then((response) => {
            setMovies1(response.data.results);
        });
        axios.get(Films).then((response) => {
            setMovies2(response.data.results);
        });
        axios.get(Séries).then((response) => {
            setSéries(response.data.results);
        });
        axios.get(Séries2).then((response) => {
            setSéries2(response.data.results);
        });
    }, []);

    return (
        <>
            <Home  movies1={movies1} movies2={movies2} séries={séries} séries2={séries2} /> 
        </>
    );
};

export default Requete;