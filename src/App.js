import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddBooks from "./components/addBooks";
import All_Books from "./components/All_Books";
import Status from "./components/Status";
import "./App.css";
import { FiSearch, FiMenu } from "react-icons/fi";
import { BiBookBookmark } from "react-icons/bi";

class App extends Component {
  // Add this inside your class component
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    return (
      <Router>
        <nav>
          <div className="navbar">
            <div className="navbarGroup">
              <div className="groupL">
                <Link to={"/"} id="linkHome">
                  <h2>Book's Bank</h2>
                </Link>
                <a href="/">
                  <BiBookBookmark size={25} color="#fff" />
                </a>
              </div>
              {/* Ícone para abrir o menu dropdown */}
              <div className="dropdown-icon" onClick={this.toggleDropdown}>
                <i className="fas fa-bars"></i>
              </div>
              {/* Menu suspenso para dispositivos móveis */}
              <div
                className={`mobile-dropdown ${
                  this.state.isDropdownOpen ? "open" : ""
                }`}
              >
                <Link className="buttonNav1" to={"/lista_de_leitura"}>
                  <button class="buttonNav inicio">Lista de Leitura</button>
                </Link>
                <Link className="buttonNav" to="/allbooks">
                  <button class="buttonNav inicio">All Books</button>
                </Link>
                <Link to="/addbooks">
                  <button className="buttonNav inicio">Adicionar livros</button>
                </Link>
              </div>
              <div id="divInp">
                <input type="text" placeholder="Search Books" />
                <FiSearch size={25} color="#fff" id="search" />
              </div>
              <button id="buttonZ" onClick={this.toggleDropdown}>
                  <FiMenu size={25} />
                </button>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addbooks" element={<AddBooks />} />
          <Route exact path="/allbooks" element={<All_Books />} />
          <Route exact path="/lista_de_leitura" element={<Status />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
