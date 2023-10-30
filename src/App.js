import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (<body>
    <div className='container-fluid bg-dark h-100' id='bg'>
      <nav className="navbar navbar-expand-lg navbar-primary w-100 bg-light p-4" id='navbar'>
        <a className="navbar-brand" href="#">Banco de Livros</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Página Inicial</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </body>
  );
}

export default App;
