const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

/* Conexão com o banco de dados */
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha',
    database: 'controle_equipamentos'
});

connection.connect((err) => {
    if (err) {
       console.error('Erro ao conectar ao Mysql:', err);
       return; 
    }
    console.log('Conectado ao MySQL!');
});

app.use(express.json());

/* Rota simples para verificaro servidor */
app.get('/', (req, res) => {
    res.send('API do Controle de Equipamentos');
});

app.listen(port, () => {
    console.log('Sevidor rodando em http://localhosto:${port}');
});

// rotas para manipular os dados dos equipamentos 
app.get('/equipamentos', (req, res) => {
    const sql = 'SELECT * FROM estoque';
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  