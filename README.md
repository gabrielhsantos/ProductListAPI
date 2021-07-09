# API de listagem dos produtos LuizaLabs

Por meio deste serviço, os clientes Magazine Luiza conseguirão adicionar os produtos favoritos em uma lista.

## 🚀 Começando

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 📋 Pré-requisitos

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/download/)

### 🔧 Instalação

```bash
# Clone este repositório
$ git clone https://github.com/gabrielhsantos/productListAPI.git

# Acesse a pasta do projeto no terminal/cmd
$ cd productListAPI

# Instale as dependências
$ npm install
```

Na raiz do projeto, existe o arquivo **env-example.txt**, Nele contém as variáveis que serão utilizadas no projeto, copie seu conteúdo.

Crie um arquivo também na raiz, com nome **.env** e cole as variáveis dentro.

O preenchimento dessas variáveis são obrigatórias, então segue um exemplo de uso:

VARIÁVEL  | VALOR
--------- | ------
API_PORT | 3001
DB_PORT | 5432
DB_USER | postgres
DB_DIALECT | postgres
DB_TIMEZONE | UTC
DB_LOGGING | false
DB_SCHEMA | public
DB | client_list
DB_HOST | localhost
DB_PASSWORD | postgres
LUIZA_LABS_URL | http://challenge-api.luizalabs.com/api
JWT_SECRET | #LuizaLabsChallenge@GabrielSantos


### 🎲 Rodando o Back End (servidor)

```bash
# Execute as migrations
$ npm run db:migrate

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3001 - acesse <http://localhost:3001> (ou a porta que foi definida no arquivo .env)
```

### ⚙️ Executando os testes

Para rodar os testes, basta utilizar este comando via terminal/cmd:

```bash
$ npm test
```

### 📦 Documentação

Um arquivo com extensão .json se encontra na pasta:
```src/config/docs```

O mesmo pode ser importado dentro do [Postman](https://www.postman.com/), para facilitar o acesso aos endpoints. 

