import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Consultar() {
  const [formData, setFormData] = useState({ title: "" });
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Esta função será acionada sempre que formData.title mudar
    if (formData.title) {
      setLoading(true);
      axios
        .get(`http://localhost:8080/consultar?title=${formData.title}`)
        .then((response) => {
          setResponseData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    } else {
      setResponseData([]);
    }
  }, [formData.title]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div className="containerBooks2">
        <div className="containerBooksIN2">
          <div className="searchDiv">
            <label>Buscar Livro: </label>
            <form className="formzin">
              <input
                type="text"
                name="title"
                id="searchB"
                value={formData.title}
                onChange={handleChange}
                placeholder="Digite o título do livro"
              />
            </form>
            <div>
              {loading ? (
                <p>Carregando resultados...</p>
              ) : (
                Array.isArray(responseData) && responseData.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Título</th>
                        {/* Adicione mais colunas aqui, se necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {responseData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          {/* Adicione mais colunas aqui, se necessário */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p id="results" >Nenhum resultado encontrado.</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultar;
