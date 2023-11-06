import { useState, useEffect } from "react";
import "../App.css";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function All_Books() {
  const [formData, setFormData] = useState({ title: "" });
  const [responseData, setResponseData] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [bookInput, setBookInput] = useState("");

  useEffect(() => {
    // Buscar todos os livros ao montar o componente
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async (e) => {
    let books = e;

    if (books == undefined) {
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

  const handleDeleteBook = async (bookId) => {
    
    try {
      await axios.delete(`http://localhost:8080/delete/${bookId}`);
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

  const handleChange = async (e) => {
    const { value } = e.target;
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
                  placeholder="Buscar por algum livro"
                />
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>
                  <button
                    onClick={() => handleDeleteBook(book.id)}
                    id="button02"
                  >
                    Excluir
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

export default All_Books;
