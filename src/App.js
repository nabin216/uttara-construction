// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Card1 from './cards/Card1';
import About from './components/About';
import Card from './components/Card';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/card' element={<Card />} />

      </Routes>
     
      
     
    </div>
  );
}

export default App;
