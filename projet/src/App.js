import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";
import Nav from "./Components/Nav";
import Favory from "./Contents/Favory";
import Favoris from "./views/Favoris";
import Home from "./Contents/Home";
import Movie from "./Contents/Movie";
import Search from "./Components/pages/Search";
import Setting from "./Contents/Setting";
import NotFound from "./Contents/NotFound";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSearch,
  faHome,
  faGear,
  faArrowLeft,
  faFaceSadCry,
} from "@fortawesome/free-solid-svg-icons";
import DetailsCard from "./Components/shared/DetailsCard";
import Requete from "./Requete";

library.add(faStar, faSearch, faHome, faGear, faArrowLeft, faFaceSadCry);

function App() {
  // const  {favorites} = useSelector((state) => state.FavoriteReducer);
  // console.log("favorites: " + favorites)

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Requete/>} />
          <Route path="/favory" element={<Favoris />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/details/:nameMovie/:movieId" element={<DetailsCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
