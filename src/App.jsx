import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return <div>
    <Navbar />
    <Home />
    <Footer />
  </div>;
};

export default App;
