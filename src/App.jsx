import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import Parcours from "./pages/parcours/Parcours";
import Projet from "./pages/projet/Projet";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/parcours" element={<Parcours/>} />
          <Route path="/projet" element={<Projet/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
