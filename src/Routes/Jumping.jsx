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
import Stream from "../Pages/Stream";
import Chip from "../Pages/Chip";
import Huffman from "../Pages/Huffman";
import Intel from "../Pages/8080";

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
        <Route path="/Stream" element={<Stream />} />
        <Route path="/Chip" element={<Chip />} />
        <Route path="/Huffman" element={<Huffman />} />
        <Route path="/8080" element={<Intel />} />
      </Routes>
    </Router>
  );
};

export default Jumping;
