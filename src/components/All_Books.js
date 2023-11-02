import { useState, useEffect } from "react";
import "../App.css";
import { BiBookAdd } from "react-icons/bi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function All_Books() {
  const [formData, setFormData] = useState({ title: "" });
  const [abrirAddBook, setAbrirAddBook] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // Buscar todos os livros ao montar o componente
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/allbooks");
      setAllBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/create",
        formData
      );
      console.log("Response:", response.data);
      setResponseData(response.data);

      toast.success(`${response.data.title} foi cadastrado com sucesso`, {
        position: "top-right",
        autoClose: 3000, // Fecha o alerta automaticamente após 3 segundos
      });
      // Atualiza a lista de livros após a criação bem-sucedida
      fetchAllBooks();
    } catch (error) {
      // Lide com erros apropriadamente
      console.error(error);
      toast.error("Ocorreu um erro ao cadastrar o livro", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  return (


        <div className="containerBooksIN3">
          <div className="bookList">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Título do Livro</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {allBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>
                      <button onClick={() => handleDeleteBook(book.id)} id="button02">
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
