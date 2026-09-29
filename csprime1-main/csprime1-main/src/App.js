import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Modules from "./Modules/Modules";
import ModuleDetails from "./Modules/ModuleDetails";
import Topics from "./Topics/Topics";
import Analytics from "./Analytics/Analytics";
import Faq from "./Faq/Faq";
import About from "./About/About";
import AuthForm from "./AuthForm/AuthForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:moduleId" element={<ModuleDetails />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
