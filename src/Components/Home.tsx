import React from "react";
import Hero from "./Hero";


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
