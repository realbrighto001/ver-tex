import React from "react";
import NavBar from "./Componet/NavBar";
import Footer from "./Componet/Footer";
import Home from "./Pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
