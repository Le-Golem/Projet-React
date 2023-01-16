import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Favory from "./Contents/Favory";
import Home from "./Contents/Home";
import Movie from "./Contents/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favory" element={<Favory />} />
          <Route path="/movie:id" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
