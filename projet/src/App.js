import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Nav from "./Components/Nav";
import Favory from "./Contents/Favory";
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

library.add(faStar, faSearch, faHome, faGear, faArrowLeft, faFaceSadCry);

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favory" element={<Favory />} />
          <Route path="/movie:id" element={<Movie />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/details/:movieId" element={<DetailsCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
