import { useState, useEffect } from "react";
import "../App.css";
import { BiBookAdd } from "react-icons/bi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleAddBook = () => {
    setAbrirAddBook(!abrirAddBook);
  };

  return (
    <div className="container">
      <div className="containerBooks">
        <div className="containerBooksIN">
            <div className="addContainer">
              <a className="linkGroup" onClick={toggleAddBook}>
                <Link id="linkAdd" to={'/addbooks'} >Adicionar Livro </Link>
                <BiBookAdd size={30} color="#ffff" />
              </a>
            </div>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
