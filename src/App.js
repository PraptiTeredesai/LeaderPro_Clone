import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Loginpage from "./components/Loginpage";
import Navbar from "./components/Navbar"; // If you have a Navbar component
import "./App.css";
import Footer from "./components/Footer";
import CompetitionTables from "./components/Competitions";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Optional: Add a Navbar for navigation */}
        <Navbar />
        
        {/* Define the application routes */}
        <Routes>
          <Route path="/" element={<Leaderboard />} /> {/* Default route */}
          <Route path="/competition" element={<CompetitionTables />} /> {/* Login route */}
          <Route path="/login" element={<Loginpage />} /> {/* Login page route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
