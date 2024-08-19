import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <div className="overflow-y-auto">
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
