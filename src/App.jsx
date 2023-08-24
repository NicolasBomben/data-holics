import { Route, Routes } from 'react-router-dom';

//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';



//pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Careers from './pages/Careers';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

//styles
import './App.css'

function App() { 
  return (
    <>
    <NavBar/>
    <Routes>
      <Route index element={ <Home/> }/>
      <Route path="services" element={ <Services/> }/>
      <Route path="about" element={ <About/> }/>
      <Route path="careers" element={ <Careers/> }/>
      <Route path="contact" element={ <Contact/> }/>
      <Route path="solutions" element={ <Solutions/> }/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
