# Teste Técnico - Backend 🚀

Desenvolva com o MVP solicitado em qualquer tecnologia, e respeitando os seguintes critérios:
  - [x] Portal ou aplicativo
  - [x] Tela de login e autenticação (criar um usuário "fredx@sisloc.com.br" e senha "123Fred")
  - [x] Backend respondendo a chamadas API REST
        
***Importante:*** A questão sobre o "repositório de dados contendo informações da locadora e produtos" precisa de esclarecimentos adicionais para definir quais dados e onde serão utilizados.

## Pré-requisitos
Certifique-se de ter as seguintes tecnologias instaladas previamente:
- 🐳 [Docker](https://www.docker.com/) - v24.0.6
- 🐳 [Docker Compose](https://docs.docker.com/compose/)
- 🟢 [Node.js](https://nodejs.org) - 20.10.0 LTS
- 🟢 [NPM](https://www.npmjs.com/) ou 🧶 [Yarn](https://yarnpkg.com/)

## Boas práticas utilizadas.
O projeto incorpora boas práticas para garantir qualidade e eficiência:
- 🎨 Código orientado a objetos
- 💼 Typescript para garantir a qualidade e utilizar código moderno
- 🏛️ Padrão de arquitetura MVC, Repositories e Models para facilitar a manutenção e manter a organização
- ⚡ Uso de async/await para lidar com requisições assíncronas
- 🔄 Controle de versão usando Git e Github
- 🗺️ Uso de ORM (Sequelize) para facilitar o mapeamento entre models e as tabelas do banco de dados

## Dicas adicionais
Use o bom senso para tomar decisões de negócios não descritas aqui. Algumas considerações importantes:

🚫 Não é necessário construir a tela de administração da loja

🌐 Popule o banco com alguns itens previamente

🚀 Apresente seu MVP rodando no dia da entrevista técnica, podendo ser em ambiente local

📦 Não é necessário enviar código ou acessos no GitHub previamente

## Setup
Com o docker, docker compose e node previamente instalados, rode osseguintes comandos:
NPM:
```sh
npm install
```
Yarn:
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

### Para rodar as seeders com dados de teste:
As seeders irão criar o usuário com o email: "fredx@sisloc.com.br"
e senha "123Fred" para login e 20 produtos aleatórios

Acesse o container da api:
```sh
docker compose exec nodeapi bash
```
Rode o comando npm ou yarn para executar as seeders:

NPM:
```sh
npm run db:seed
```
Yarn:
```sh
yarn db:seed
```

## Bibliotecas e Tecnologias
- ⚙️ [Express](https://expressjs.com/) - Framework Backend
- 🔑 [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) - Utilizado para autentica&ccedil;ão do usuário
- 🔐 [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme) - Utilizado para criptografar senha
- 🔄 [Sequelize](https://sequelize.org/) - ORM (Object-Relational Mapping ou Mapeamento Objeto-Relacional) para fazer o mapeamento entre as models e as tabelas do banco
- 🐬 [MySQL](https://www.mysql.com/) - Sistema Gerenciador de Banco de Dados
- 🐳 [Docker](https://www.docker.com/) - Cria&ccedil;ão de Continers para ambientes isolados da API, Banco de dados (MySQL) e phpmyadmin
