// import logo from './logo.svg';
import './App.css';
// import Card1 from './cards/Card1';
import About from './components/About';
import Card from './components/Card';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Card />
    </div>
  );
}

export default App;
