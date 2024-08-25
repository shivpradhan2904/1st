import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import "../src/Components/styles.css"

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
