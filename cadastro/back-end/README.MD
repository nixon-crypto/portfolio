# API de Usuário - Node.js + Prisma + MongoDB

API REST para gerenciamento de usuários desenvolvida com Node.js, Express, Prisma e MongoDB.
A aplicação permite criar, listar, alterar e remover usuários armazenados em um banco de dados MongoDB.

## Tecnologias utilizadas

-Node.js
-Express
-Prisma ORM
-MongoDB
-JavaScript

## Instalação

Clone o repositório git clone ""

Entre na pasta do projeto:
cd API

Instale as dependências:
npm install

## Variáveis de ambiente

Crie um arquivo ".env" na raiz do projeto e adicione a string de conexão com o MongoDB: DATABASE_URL"mongodb+srv://usuario:senha@cluster.mongodb.net/database"

## Executando o projeto

### Gerar o Prisma Client:

- npx prisma generate

### Sincronizar o banco de dados com o schema:

- npx prisma db push

## Iniciar o servidor:
-node --watch server.js

# Endpoints da API

## Criar usuário

POST /usuarios

Body da requisição:
{
"name": "Leandro",
"email": "leandro@gmail.com",
"age": 28
}

## Listar usuários
- GET /usuarios
Retorna todos os usuários cadastrados

## Deletar usuários
- DELETE /usuarios/:id
Remove usuários por id

## Alterar dados cadastrados
-- PUT /usuarios/:id
Body da requisição:
{
"name": "Leandro",
"email": "leandro@gmail.com",
"age": 28
}

# Autor
Leandro de Souza Silva