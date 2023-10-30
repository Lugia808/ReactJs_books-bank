import './App.css';
import { FiSearch } from 'react-icons/fi';
import { BiBookBookmark } from 'react-icons/bi'




// Rest of your code

function App() {
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

          <div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
