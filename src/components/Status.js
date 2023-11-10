import { useState, useEffect } from "react";
import "../App.css";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importe FiEye e FiEyeOff
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillDelete } from "react-icons/ai"

function Status() {
  const [allBooks, setAllBooks] = useState([]);
  const [bookInput, setBookInput] = useState('')

  useEffect(() => {
    // Buscar todos os livros ao montar o componente
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async (e) => {
    let books = e;

    if (books === undefined) {
      try {
        const response = await axios.get(
          `http://localhost:8080/allbooks?id=`
        );
        setAllBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    else{
      try {
        const response = await axios.get(
          `http://localhost:8080/allbooks?id=${e}`
        );
        setAllBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleUpdateNBook = async (bookId) => {
    
    try {
      await axios.get(`http://localhost:8080/lista_de_leitura?id=${bookId}`);
      toast.success("Livro deletado com sucesso", {
        position: "top-right",
        autoClose: 3000,
      });
      // Atualiza a lista de livros após a exclusão bem-sucedida
      fetchAllBooks();
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao deletar o livro", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  
  const handleUpdateBook = async (bookId) => {
    
    try {
      await axios.get(`http://localhost:8080/lista_de_leitura?id=${bookId}`);
      toast.success("Status alterado com sucesso", {
        position: "top-right",
        autoClose: 3000,
      });
      // Atualiza a lista de livros após a exclusão bem-sucedida
      fetchAllBooks();
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao atualizar o livro", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleChange = async (e) => {
    const { value } = e.target;
    setBookInput(value)
    fetchAllBooks(value);
  };

  return (
    <div className="containerBooksIN3">
    <div className="bookList">
      <table className="styled-table">
        <thead>
          <tr>
            <th>
              Título do Livro
              <input
                id="inputzada"
                onChangeCapture={handleChange}
                value={bookInput}
                name="book"
                placeholder="Buscar por algum livro"
              />
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => (
            <tr className={book.status === 'lido' ? 'lido' : ''} key={book.id}>
              <td>
                {book.title}
              </td>
              <td>
                <button
                  onClick={() => handleUpdateNBook(book.id)}
                  id="button02"
                >
                  <AiFillDelete size={25} color="#ff4555" />
                </button>
                <button
                  id="button02" style={{marginLeft:'5px'}}
                  onClick={() => handleUpdateBook(book.id)}
                >
                  {book.status === 'lido' ? (
                    <FiEyeOff size={25} color="#000000" />
                  ) : (
                    <FiEye size={25} color="#000000" />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <ToastContainer /> {/* Container para exibir os alertas */}
  </div>
  );
}

export default Status;
