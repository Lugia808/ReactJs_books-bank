import { useState } from 'react';
import '../App.css';
import { FiSearch } from 'react-icons/fi';
import { BiBookBookmark, BiBookAdd } from 'react-icons/bi'
import { BrowserRouter, Routes, Route } from "react-router-dom";




function Home() {
  const [abrirAddBook, setabrirAddBook] = useState("");

  return (

    <div className="container">

      <div className="containerBooks">
        <div className="containerBooksIN">
          <div className="addContainer">
            <a className="linkGroup" onClick={() => setabrirAddBook("aberto")}>
              <span>Adicionar Livro </span>
              <BiBookAdd size={30} color="#008000" />
            </a>
          </div>

          {Object.keys(abrirAddBook) != "" && (
            <div className="addBook">
              <h3>Cadastrar Livro</h3>
              <label>Nome do livro</label>
              <input />
              {/* <label>Tag</label>
                <input /> */}
              <label>Categoria</label>
              <input />

              <button className="submitButton">Enviar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;