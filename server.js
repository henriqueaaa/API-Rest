const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`---`);
    console.log(`🚀 API JOGO RODANDO COM SUCESSO!`);
    console.log(`📍 Local: http://localhost:${PORT}/games`);
    console.log(`---`);
});