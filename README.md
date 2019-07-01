<-- criar um arquivo package.json -->

npm init -y

<-- express é um microframework que auxilia com rotas e view -->

npm install express

<-- startar o node pelo arquivo server.js -->

node server.js

<-- nodemon da reload no server sempre que houver mudança -->

npm install -D nodemon

<-- para iniciar o servidor com o nodemon, configuração no script do package.json -->

npm run dev

<-- baixando a imagem do mongo -->

docker pull mongo


<-- montar a imagem na maquina -->

docker run --name mongodb -p 27017:27017 -d mongo

<-- para ver os containeres rodando -->

docker ps

<-- para ver os container -->

docker ps -a

<-- para startar um container down -->

docker start nome/id container

<-- é um ORM do mongodb -->

npm install mongoose

<-- ela faz o require em um diretorio em todos os arquivos automaticamente -->

npm install require-dir

<-- ele faz a paginação -->

npm install mongoose-paginate

<-- para permitir todo tipo de  acesso -->

npm install cors

<-- endpoints -->

api/products


