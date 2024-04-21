import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import GemniTutorial from "./pages/GemniTutorial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/npc" element={<GemniTutorial />} />
      </Routes>
    </Router>
  );
}

export default App;
