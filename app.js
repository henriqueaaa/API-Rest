const express = require('express');
const games = require('./initialData'); 
const app = express();

app.use(express.json());


app.get('/games', (req, res) => {
    res.status(200).json(games);
});


app.get('/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) {
        return res.status(404).json({ error: "Jogo não encontrado no sistema." });
    }
    res.status(200).json(game);
});


app.post('/games', (req, res) => {
    const { title, platform, year } = req.body;

    if (!title || !platform || !year) {
        return res.status(400).json({ error: "Campos obrigatórios: title, platform e year." });
    }

    const newGame = {
        id: games.length > 0 ? games[games.length - 1].id + 1 : 1,
        title,
        platform,
        year
    };

    games.push(newGame);
    res.status(201).json(newGame);
});


app.put('/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    
    if (!game) {
        return res.status(404).json({ error: "Não é possível atualizar: Jogo não encontrado." });
    }

    const { title, platform, year } = req.body;

    game.title = title || game.title;
    game.platform = platform || game.platform;
    game.year = year || game.year;

    res.status(200).json({ message: "Jogo atualizado com sucesso!", game });
});


app.delete('/games/:id', (req, res) => {
    const index = games.findIndex(g => g.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: "Não é possível deletar: Jogo não encontrado." });
    }

    games.splice(index, 1);
    res.status(200).json({ message: "Jogo removido com sucesso da biblioteca." });
});

module.exports = app;