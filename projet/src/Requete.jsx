import "axios";
import axios from "axios";
import { useState, useEffect } from "react";
import {topRatedMovies1 ,Films ,Séries,Séries2 , Horror , Action ,SF, HorrorS, allMovies} from "./api";
import Home from "./Components/pages/home";


const Requete = () => {
    const [movies1, setMovies1] = useState([]);
    const [movies2, setMovies2] = useState([]);

    const [séries, setSéries ] = useState([]);
    const [séries2, setSéries2 ] = useState([]);

    const [Horror1, setHorror1] = useState([]);
    const [Action1, setAction1] = useState([]);
    const [SF1, setSF1 ] = useState([]);

    const [Horror2, setHorror2] = useState([]);
    const [allMoviesList, setAllMoviesList] = useState([]);


    useEffect(() => {
        let cumulatedMovies = []

        for( let p = 1; p < 21; p++){
            axios.get(allMovies+p).then((response) => {
                cumulatedMovies.push(response.data.results)
            })
        }

        setAllMoviesList(cumulatedMovies)
        console.log(allMoviesList)
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
        axios.get(Horror).then((response) => {
            setHorror1(response.data.results);
        });
        axios.get(Action).then((response) => {
            setAction1(response.data.results);
        });
        axios.get(SF).then((response) => {
            setSF1(response.data.results);
        });
        axios.get(HorrorS).then((response) => {
            setHorror2(response.data.results);
        });
    }, []);

    //console.log(Horror1)
    console.log(Action1)
    return (
        <>
            <img className="logo-flix" src="/logo.png" alt=""/> 
            <Home  movies1={movies1} movies2={movies2} séries={séries} séries2={séries2} Horror1={Horror1} Action1={Action1} SF1={SF1} Horror2={Horror2}/> 
        </>
    );
};

export default Requete;