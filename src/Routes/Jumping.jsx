import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  ProjectsPage,
  Stack,
  Contact,
  DiscordStudy,
  Repliqa,
  Freelance,
  NoCopy,
} from "../Pages/index";
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
        <Route path="/DiscordStudy" element={<DiscordStudy />} />
        <Route path="/Repliqa" element={<Repliqa />} />
        <Route path="/Wordpress" element={<Freelance />} />
        <Route path="/Nocopy" element={<NoCopy />} />
      </Routes>
    </Router>
  );
};

export default Jumping;
