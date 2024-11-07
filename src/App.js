import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Navbar />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div> 
  );
}

export default App;
