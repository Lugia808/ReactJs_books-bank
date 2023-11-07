import "../App.css";
import { useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BiBookAdd } from "react-icons/bi";

function Consultar() {
  const [formData, setFormData] = useState({ title: "" });
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  return (
    <div className="container containerAdd">
      <div className="addBook">

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
           <BiBookAdd size={25} />
          </button>
        </form>
      </div>
      <ToastContainer id="toastC" /> 
    </div>
  );
}

export default Consultar;
