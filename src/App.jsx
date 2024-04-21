import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import MLAgent from "./pages/MLAgent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/npc" element={<MLAgent />} />
      </Routes>
    </Router>
  );
}

export default App;
