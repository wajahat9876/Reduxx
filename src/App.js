import './App.css';
import NavBar from './Components/NavBar/Navigation';
import MainPage from './Components/HomePage/MainPage';
import Footer from './Components/NavBar/Footer';
import Displaycontent from './Components/Displaycontent/Displaycontent';
import Placeorder from './Components/Placeorder/Placeorder';
import Login from './Components/Login/Login';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Footer />
        <Routes>
          <Route exact path='/' element={<Login />}>
            {' '}
          </Route>
          <Route exact path='/display' element={<Displaycontent />}></Route>
          <Route exact path='/placeorder/:id' element={<Placeorder />}>
            {' '}
          </Route>
          <Route exact path='/login' element={<Login />}>
            {' '}
          </Route>
          <Route path='/mainpage' element={<MainPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
