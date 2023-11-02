const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handlebars = require("handlebars");
const { sequelize } = require("./models/database");
const Books = require("./models/Books");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the actual origin of your React app
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("pegando");
});

app.delete("/delete/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Books.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    await book.destroy();

    res.status(204).end(); // Resposta bem-sucedida sem conteúdo
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar o livro" });
  }
});


app.get("/allbooks", async (req, res) => {
  try {
    const allBooks = await Books.findAll();
    res.status(200).json(allBooks);
  } catch (error) {
    console.error("Erro ao buscar todos os livros:", error);
    res.status(500).json({ error: "Erro ao buscar todos os livros" });
  }
});


app.post("/create", async (req, res) => {
  const { title } = req.body;

  if (title) {
    try {
      const newBook = await Books.create({ title });
      console.log("Livro criado com sucesso:", newBook);
      res.status(201).json(newBook); // Retorna o livro criado como JSON com status 201 (Created)
    } catch (error) {
      console.error('Erro ao criar o livro:', error);
      res.status(500).json({ error: "Erro ao criar o livro" }); // Retorna um erro como JSON com status 500 (Internal Server Error)
    }
  } else {
    res.status(400).json({ error: "Título ausente no corpo da solicitação" }); // Retorna um erro como JSON com status 400 (Bad Request)
  }
});

app.post("/consultar", async (req, res) => {
  const { title } = req.body; // Use req.body para acessar os dados do corpo da solicitação

  if (title) {
    Books.findAll({ where: { title: title } }).then((result) => {
      if (result.length > 0) {
        console.log("Um ou mais resultados foram encontrados:", result);
        res.status(200).send(result); // Envia os resultados como resposta JSON com status 200 (OK)
      } else {
        console.log("Nada foi encontrado.");
        res.status(404).send({ message: "Nada foi encontrado." }); // Envia uma mensagem de erro com status 404 (Not Found)
      }
    }).catch((error) => {
      console.error('Erro ao consultar o banco de dados:', error);
      res.status(500).send({ message: "Erro ao consultar o banco de dados." }); // Envia uma mensagem de erro com status 500 (Internal Server Error)
    });
  } else {
    console.log("Parâmetros ausentes no corpo da solicitação.");
    res.status(400).send({ message: "Parâmetros ausentes no corpo da solicitação." }); // Envia uma mensagem de erro com status 400 (Bad Request)
  }
});


app.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});
