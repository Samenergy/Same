import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Resume from "./Components/Resume";
import ProjectsSection from "./Components/Projects";
import ContactForm from "./Components/Contact";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="overflow-y-auto">
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<ProjectsSection />} />
            <Route path="/Contact" element={<ContactForm />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default App;
