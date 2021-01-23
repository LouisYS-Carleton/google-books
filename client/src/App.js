import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Saved from "./components/Saved/Saved";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" />
      <Route exact path="/search" component={SearchBar} />
      <Route exact path="/saved" component={Saved} />
    </Router>
  );
}

export default App;
