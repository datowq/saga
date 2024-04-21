import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import MLAgent from "./pages/MLAgent";
import CodeEditorButton from "./components/CodeEditorButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/npc" element={<MLAgent />} />
        <Route path="/cd" element={<CodeEditorButton />} />
      </Routes>
    </Router>
  );
}

export default App;
