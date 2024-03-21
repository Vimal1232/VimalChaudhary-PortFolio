import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home, ProjectsPage, Stack, Contact } from "../Pages/index";
import Scrolltop from "../Hooks/scrolltop";

const Jumping = () => {
  return (
    <Router>
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Stack" element={<Stack />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Jumping;
