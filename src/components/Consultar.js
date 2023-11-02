import "../App.css";
import { useState } from "react";
import axios from 'axios'

function Consultar() {
  const [formData, setFormData] = useState({
    title: '',
  });

  const handleSubmit = async (event) => {
    
    //O axios não está enviando direito
    try{
        alert('try')
        const response = await axios.get('https://localhost:8080/consultar', {params:formData});
        console.log('Resposta da API: '+ response.data)
        if(response){
            alert(response)
        }
        alert('pegou?')
    }
    catch(error){
        console.error('Erro ao enviar dados para a API: '+ error)
    }

  };

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
            <form className="formzin" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                id="searchB"
                onChange={handleChange}
                placeholder="Digite o título do livro"
              />
              <button id="ButtonS">Buscar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultar;
