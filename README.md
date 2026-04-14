TRABALHO 2 

Criar uma API REST completa de um tema à sua escolha:
• Tema: Livros, Filmes, Jogos, Tarefas, etc
• Mínimo 10 registros iniciais
• CRUD 100% implementado (GET, POST, PUT, DELETE)
• Validações completas
• Tratamento de erros
• Collection do Postman com TODOS os testes

1. Iniciar o servidor

Bash
npx nodemon server.js

2. Acesso: http://localhost:3000/games

3. Tecnologias 

Node.js: Ambiente de execução.

Express: Framework para construção das rotas e lógica da API.

Nodemon: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

4. Endpoints

1. Listar todos os jogos
Rota: GET /games

Status Code: 200 OK

2. Buscar jogo por ID
Rota: GET /games/:id

Status Code: 200 OK (Sucesso) ou 404 Not Found (ID inexistente)

3. Adicionar novo jogo
Rota: POST /games

Corpo (JSON):

JSON
{
  "title": "Nome do Jogo",
  "platform": "Plataforma",
  "year": 2024
}
Status Code: 201 Created

4. Atualizar jogo
Rota: PUT /games/:id

Status Code: 200 OK ou 404 Not Found

5. Remover jogo
Rota: DELETE /games/:id

Status Code: 200 OK ou 404 Not Found
