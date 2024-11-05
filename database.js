const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Diaskevin121@', // Substitua 'sua_senha' pela senha do seu usuário root
    database: 'controle_estoque' // O nome do seu banco de dados
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

module.exports = db;
