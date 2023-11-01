import "./App.css";
import React, { Component } from "react"; // Change from Components to Component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Consultar from "./components/Consultar"

import { useState } from "react";
import "./App.css";
import { FiSearch } from "react-icons/fi";
import { BiBookBookmark, BiBookAdd } from "react-icons/bi";

class App extends Component {
  // Change from "app" to "App"
  render() {
    return (
      <Router>


          <nav>
            <div className="navbar">
              <div className="groupL">
                <h2>Book's Bank</h2>
                <BiBookBookmark size={25} color="#fff" />
              </div>
              <div className="navbarGroup">
                <input type="text" placeholder="Search Books" />
                <FiSearch size={25} color="#fff" id="search" />
              </div>
            </div>
            <div className="navbar1">
              <button className="buttonNav inicio">Adicionar livros</button>
              <Link className="buttonNav" to='/consultar'>Consultar livros</Link>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/consultar" element={<consultar/>} />
          </Routes>
      </Router>
    );
  }
}

export default App;
