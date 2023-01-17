import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favoris from './Components/pages/Favoris';
import Home from './Components/pages/Home';
import Search from './Components/pages/Search';
import DetailsCard from './Components/shared/DetailsCard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/details/:movieId" element={<DetailsCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
