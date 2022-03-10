import React from "react";
import SaveClient from "./components/SaveClient/SaveClient";
import ShowClients from "./components/ShowClient/ShowClients";
import Navigation from "./components/Navbar/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<SaveClient />} />
          <Route path="/clients" element={<ShowClients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
