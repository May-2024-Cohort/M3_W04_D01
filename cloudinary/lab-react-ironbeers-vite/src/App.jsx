import "./App.css";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";
import AddBeerPage from "./pages/AddBeerPage";
import UpdateBeerPage from "./pages/UpdateBeerPage";



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<AllBeersPage/>}/>
        <Route path="/random-beer" element={<RandomBeersPage/>}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage/>}/>
        <Route path="/new-beer" element={<AddBeerPage/>}/>
        <Route path="/beers/:id/edit" element={<UpdateBeerPage/>}/>

      </Routes>

    </div>
  );
}

export default App;
