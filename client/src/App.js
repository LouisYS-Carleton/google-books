import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" />
      <Route exact path="/search" component={SearchBar} />
      <Route exact path="/saved" />
    </Router>
  );
}

export default App;
