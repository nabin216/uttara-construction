// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Service.css'
import './Construct.css'
// import Card1 from './cards/Card1';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
import Construct from './components/Construct';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
          <Helmet>
              <title>Home Page</title>
              <meta name='description' content='Shreeram Architect and construction website' />
              <meta name='keyword' content='Architecture, elevation, Vastu, Website, Shreram Constructions in Mandsaur' />
              <meta name="author" content="Shreeram Architect and Construction"></meta>
        </Helmet>
      <Routes >
    
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        {/* <Route path='/service' element={<Service />} /> */}
        <Route path='/construction' element={<Construct />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
     
      
     
    </div>
  );
}

export default App;
