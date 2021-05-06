<h1 align="center">
    <a href="">🔗 Teste</a>
</h1>
<p align="center">🚀 Inicio do projeto</p>

<h4 align="center"> 
   Tecnologias Usadas
</h4>

<p> - Node </p>
<p> - Express </p>
<p> - Typescript </p>
<p> - PostegreSql </p>
<p> - TypeOrm </p>
<p> - dotenv </p>
<p> - bcrypt, jsonwebtoken </p>

# Menu
<br>
<p align="center">
 <a href="#arquitetura">Arquitetura</a> •
<a href="#env">.env</a> • 
 <a href="#instalacao">Instalação</a> •
 <a href="#routes">Routes</a> • 
 <a href="#config">Config</a> • 
 <a href="#migratins">Migrations</a> • 
</p>

# Arquitetura
<br>
<div id="arquitetura">

<p><b>Entities:</b> contém nossas entidades de banco de dados . </p>
<p><b>Repositories:</b> contém nossas classes de acesso ao banco de dados .  </p>
<p><b>UseCases:</b> Eles são responsáveis ​​por atender ao que os controladores REST precisam, acessando diferentes repositórios  </p>
<p><b>Controladores:</b>ontém nossos controladores REST . Eles são responsáveis ​​por mediar a comunicação entre o usuário e os UseCases. Eles recebem solicitações e retornam respostas.  </p>

</div>

# .Env
<br>

<div id="env">
Adicione o arquivo <b>.env</b> como descrito acima.



```bash
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=siat-test
APP_URL=http://${HOST}:${PORT}
APP_KEY=298abd70a6a9e6e419c4de98582c306c
APP_EXPIRATION="1d"
DB_CONNECTION=postgres
DB_HOST="localhost"
DB_PORT=5432
DB_USER=""
DB_PASSWORD=""
DB_DATABASE=""
HASH_DRIVER=bcrypt
```
</div>

# Instalação
<br>
<div id="instalacao">

Execute o codigo abaixo abaixo;

```bash
npm install
```
</div>

# Routes

<br>
<div id="routes">

Existem as Rotas principais

usuarios, noticias ....

E rotas filhas

usuarios
```bash
 get(listar), post(cadastrar),put(update), delete(deletar)
```
</div>

# Config
<br>
<div id="config">

<p><b>constants:</b> contantes que serão repeditas durante toda aplicação. </p>
<p><b>errors:</b> Aqui sera colocar uma padronização dos erros. </p>
<p><b>events:</b> Todas aplicações que será necessario ter uma ação em um determinado dia ou em um intervalo de tempo sera colocados em events. </p>
<p><b>helpers:</b> Metodos que serão replicados por toda aplicação. </p>
<p><b>utils:</b> codigo de pequeno porte que sera compartilhado em toda aplicação ( como formatação de data ). </p>

</div>

# Migrations
<br>
<div id="migratins">

Dentro de <b>database/migrations</b> temos nossas migrations, caminho configurado no <p>ormconfig</p>:

Para criar o migration basta fazer como exemplo abaixo:

```bash
  yarn typeorm migration:create -n CreateUsuarios
```

E configure a migration creada.

Para da um run em todas as migrations basta:

```bash
  yarn typeorm migration:run
```

</div>
<br>

<h4 align="center"> 
	🚧  Não esqueça de inserir arquivo .env e executar npm install no terminal  🚧
</h4>