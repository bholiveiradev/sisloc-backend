# Teste Técnico - Backend

Desenvolva com o MVP solicitado em qualquer tecnologia, e respeitando os seguintes critérios:
  - [x] Portal ou aplicativo
  - [x] Tela de login e autenticação (criar um usuário "fredx@sisloc.com.br" e senha "123Fred");
  - [x] Backend respondendo a chamadas API REST; 
  - [ ] Repositório de dados contendo informações da locadora e produtos.

## Pré-requisitos
É preciso ter instalado previamente as seguintes tecnologias:
- [Docker](https://www.docker.com/) - v24.0.6
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org) - 20.10.0 LTS
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Boas práticas utilizadas.
- Código orientado a objetos;
- Typescript para a garantia da qualidade e utiliza&ccedil;ão de código moderno;
- Padrão de arquitetura MVC, Repositories e Models para facilitar a manuten&ccedil;ão e manter a organiza&ccedil;ão;
- Uso de async/await para lidar com requisições assíncronas;
- Git e Github para controle de versão;
- Uso de ORM (Sequelize) para facilitar e fazer o mapeamento entre models e tabelas do banco de dados;

## Dicas adicionais
USE SEU BOM-SENSO PARA TOMAR DECISÕES DE NEGÓCIO NÃO DESCRITAS AQUI. 

NÃO É NECESSÁRIO CONSTRUIR A TELA DE ADMINISTRAÇÃO DA LOJA

POPULAR O BANCO COM ALGUNS ITENS PREVIAMENTE. 

VOCÊ DEVE APRESENTAR SEU MVP RODANDO NO DIA DA ENTREVISTA TÉCNICA.

PODE SER APRESENTADO RODANDO EM AMBIENTE LOCAL.

NÃO É NECESSÁRIO ENVIAR CÓDIGO OU ACESSOS NO GITHUB PREVIAMENTE

## Setup
Com o docker, docker compose e node previamente instalados, rode osseguintes comandos:
NPM:
```sh
npm install
```
ou
```sh
yarn install
```
Entre na pasta do projeto e renomeie ou copie o arquivo .env.example, inserindo as informa&ccedil;ões do seu ambiente
```sh
cp .env.example .env
```
```sh
APP_PORT=3000

DB_DRIVER=mysql
DB_HOST=mysqldb
DB_DATABASE=
DB_USER=
DB_PASSWORD=
DB_PORT=3306

JWT_SECRET=qW5ctTp5!DS2ka4ya90K.0q!aU77@bA # Altere aqui!
JWT_EXPIRES=2h
```
Suba os containers docker com:
```sh
docker compose up
```
ou
```sh
docker compose up -d
```

## Tecnologias Utilizadas
- [Express](https://expressjs.com/) - Framework Backend
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) - Utilizado para autentica&ccedil;ão do usuário
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme) - Utilizado para criptografar senha
- [Sequelize](https://sequelize.org/) - ORM (Object-Relational Mapping ou Mapeamento Objeto-Relacional) para fazer o mapeamento entre as models e as tabelas do banco
- [MySQL](https://www.mysql.com/) - Sistema Gerenciador de Banco de Dados
