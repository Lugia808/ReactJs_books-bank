import { useState } from 'react';
import './App.css';
import { FiSearch } from 'react-icons/fi';
import { BiBookBookmark, BiBookAdd } from 'react-icons/bi'




// Rest of your code

function App() {

  const [abrirAddBook, setabrirAddBook] = useState('')



  return (
    <div className="container">
      <nav>
        <div className='navbar'>
          <div className='groupL'>
            <h2>Book's Bank</h2>
            <BiBookBookmark size={25} color='#fff' />
          </div>
          <div className='navbarGroup'>
            <input type="text" placeholder="Search Books" /><FiSearch size={25} color='#fff' id='search' />
          </div>
        </div>
        <div className='navbar1'>
          <button className='buttonNav inicio'>Adicionar livros</button>
          <button className='buttonNav'>Consultar livros</button>
        </div>
      </nav>

      <div className='containerBooks'>
        <div className='containerBooksIN'>

          <div className='addContainer'>
            <a className='linkGroup' onClick={() => setabrirAddBook('aberto')}><span>Adicionar Livro </span><BiBookAdd size={30} color='#008000' /></a>
          </div>

          {Object.keys(abrirAddBook) != '' && (

            <div className='addBook'>
              <h3>Cadastrar Livro</h3>
              <label>Nome do livro</label>
              <input />
              {/* <label>Tag</label>
              <input /> */}
              <label>Categoria</label>
              <input />

              <button className='submitButton'>Enviar</button>
            </div>

          )}

        </div>
      </div>

    </div>
  );
}

export default App;
