// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Service.css'
import 'flowbite';
import './Construct.css'
// import Card1 from './cards/Card1';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
import Construct from './components/Construct';
// import { Helmet } from 'react-helmet';
import PageProgress from 'react-page-progress';


function App(){
  return (
    
    <div>
      <PageProgress color={'darkblue'} height={5} />

      <Routes >
    
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/construction' element={<Construct />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
     
      
     
    </div>
  );
}

export default App;
