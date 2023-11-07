import "./App.css";
import React, { Component } from "react"; // Change from Components to Component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddBooks from "./components/addBooks"
import All_Books from "./components/All_Books"
import Status from "./components/Status"
import "./App.css";
import { FiSearch } from "react-icons/fi";
import { BiBookBookmark } from "react-icons/bi";

class App extends Component {
  // Change from "app" to "App"
  render() {
    return (
      <Router>


        <nav>
          <div className="navbar">
            <div className="groupL">
              <Link to={'/'} id="linkHome"><h2>Book's Bank</h2></Link>
              <BiBookBookmark size={25} color="#fff" />
            </div>
            <div className="navbarGroup">
              <Link className="buttonNav1" to={"/lista_de_leitura"} >Lista de Leitura</Link>
              <a href="/addbooks" ><button className="buttonNav inicio">Adicionar livros</button></a>

              <Link className="buttonNav" to='/allbooks'>All Books</Link>
              <input type="text" placeholder="Search Books" />
              <FiSearch size={25} color="#fff" id="search" />
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
