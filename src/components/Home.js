import { useState, useEffect } from "react";
import "../App.css";
import { BiBookAdd } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [formData, setFormData] = useState({ title: "" });
  const [abrirAddBook, setAbrirAddBook] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
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
        autoClose: 3000,
      })
      setFormData({ title: "" });
    } catch (error) {
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

  const handleBack = () => {
    setAbrirAddBook(false);
  };

  const toggleAddBook = () => {
    setAbrirAddBook(!abrirAddBook);
  };

  return (
    <div className="container">
      <div className="containerBooks">
        <div className="containerBooksIN">
          {abrirAddBook ? (
            <div style={{display:"none"}}>

            </div>
          ) : (
            <div className="addContainer">
              <a className="linkGroup" onClick={toggleAddBook}>
                <span>Adicionar Livro </span>
                <BiBookAdd size={30} color="#008000" />
              </a>
            </div>
          )}
          {abrirAddBook && (
            <div className="addBook">
              <button className="backButton" id="ButtonS1" onClick={handleBack}>
                <IoIosArrowBack size={30} color="#0f0f0" /> 
              </button>

              <div className="titleGP">
                <h3 id="cadastrarBook">Cadastrar Livro</h3>
                <h5 style={{ textAlign: "center" }}>Nome do livro</h5>
              </div>
              <form className="formzin" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  id="searchB"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Digite o título do livro"
                />
                <button id="ButtonS" type="submit">
                  Adicionar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
