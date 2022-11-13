import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar, Footer} from './components'
import PlaceToStay from './pages/places'
import Home from './pages/Home/index.js'
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <Router>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/placetostay' element={<PlaceToStay />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
