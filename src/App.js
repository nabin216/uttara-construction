// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Service.css'
// import Card1 from './cards/Card1';
import About from './components/About';
import Card from './components/Card';
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service' element={<Service />} />

        <Route path='/contact' element={<Contact />} />

      </Routes>
     
      
     
    </div>
  );
}

export default App;
