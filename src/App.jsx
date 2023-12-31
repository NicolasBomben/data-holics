import { Route, Routes } from 'react-router-dom';

//components
//import NavBar from './components/NavBar';
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";



//pages
import Home from './pages/Home';
import Services from './pages/Services';
//import About from './pages/About';
//import Careers from './pages/Careers';
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
      <Route path="contact" element={ <Contact/> }/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
