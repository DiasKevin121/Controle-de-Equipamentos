const express = require('express');
const db = require('./database'); // Certifique-se de que esse caminho está correto

const router = express.Router();

// Rota para 'estoque'
// GET: Listar todos os itens no estoque
router.get('/estoque', (req, res) => {
    db.query('SELECT * FROM estoque', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST: Adicionar um novo item ao estoque
router.post('/estoque', (req, res) => {
    const novoItem = req.body;
    db.query('INSERT INTO estoque SET ?', novoItem, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: results.insertId, ...novoItem });
    });
});

// Rota para 'movimentacoes'
// GET: Listar todas as movimentações
router.get('/movimentacoes', (req, res) => {
    db.query('SELECT * FROM movimentacoes', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST: Adicionar uma nova movimentação
router.post('/movimentacoes', (req, res) => {
    const novaMovimentacao = req.body;
    db.query('INSERT INTO movimentacoes SET ?', novaMovimentacao, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: results.insertId, ...novaMovimentacao });
    });
});

// Rota para 'projetos'
// GET: Listar todos os projetos
router.get('/projetos', (req, res) => {
    db.query('SELECT * FROM projetos', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// POST: Adicionar um novo projeto
router.post('/projetos', (req, res) => {
    const novoProjeto = req.body;
    db.query('INSERT INTO projetos SET ?', novoProjeto, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: results.insertId, ...novoProjeto });
    });
});


// POST: Adicionar um novo projeto
router.post('/projetos', (req, res) => {
    const { nome, descricao, status } = req.body;
    const novoProjeto = { nome, descricao, status };

    db.query('INSERT INTO projetos SET ?', novoProjeto, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: results.insertId, ...novoProjeto });
    });
});


module.exports = router;
