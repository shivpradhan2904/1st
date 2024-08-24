import './App.css';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education'
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
