import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Works from './components/Works';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      
    </div>
  );
}

export default App;
