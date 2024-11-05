// Importa as dependências
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

// Carrega variáveis de ambiente
dotenv.config();

// Cria uma aplicação Express
const app = express();

// Define a porta onde o servidor vai rodar
const PORT = process.env.PORT || 3000;

// Middleware para permitir que o servidor interprete JSON
app.use(express.json());

// Teste inicial: Rota básica
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Configura a conexão com o banco de dados MySql 
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Diaskevin121@',
    database: process.env.DB_NAME || 'controle_estoque'
});

// Conecta ao MySQL
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

const routes = require('./routes'); // Ajuste o caminho conforme necessário

app.use('/api', routes); // As rotas serão acessíveis pelo prefixo /api
