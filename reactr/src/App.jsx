import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Weather from "./components/weather";

import Hero from "./components/hero"; // If you're using this, add a route for it
import Form from "./components/contactForm"; // If you're using this, add a route for it
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Changed Switch to Routes
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/weather" element={<Weather/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

          <Route path="/contact" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
