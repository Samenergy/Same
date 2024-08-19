import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div>
      <div className="overflow-y-auto">
        <Hero/>
      </div>
    </div>
  );
};

export default Home;
