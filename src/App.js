import logo from './logo.svg';
import './App.css';
import Homee from './componet/Homee';
import Header from './componet/Header';
import './Header.css';
import './Home.css';
import './about.css';
import './Project.css';
import './Skills.css';
import './contact.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct import
import About from './componet/About';
import Projects from './componet/Projects';
import Proficiencies from './componet/Proficiencies';
import Contact from './componet/Contact';

function App() {
  return (
    <div className="App">
  
        <Header />  
        
       
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/proficiencies" element={<Proficiencies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    
  );
}

export default App;
