# ts-express

Ambiente utilizado:
node -v : v12.19.0 
npm -v : 6.14.8

## Instruções de execução

1. $ npm i
2. $ npm run typeorm migration:run
3. $ npm run dev

## Testando a API
### POST
$ curl -i -X POST "http://localhost:3333/pessoas" -H "accept: */*" -H "Authorization: Abre-te Cézamo..." -H "Content-Type: application/json" -d "{\"nome\":\"Caique Pimenta\",\"email\":\"cpimenta.apsoftware@gmail.com\",\"instagram\":\"https://www.instagram.com/cpimenta.apsoftware\",\"facebook\":\"https://www.facebook.com/caique.pimenta.733\",\"linkedin\":\"https://www.linkedin.com/in/caique-pimenta-350117117\"}"

### GET
$ curl -s "http://localhost:3333/pessoas" |jq

## Roteiro para criação desse projeto
1. mkdir ts-express
2. npm i git-commit-msg-linter -D
3. Adicionar o .gitignore com o seguinte conteúdo: node_modules/**/*
4. npm i express
5. npm i @types/express -D
6. npm i typescript -D
7. npm tsc --init
8. Mudar o target de es5 para es2017 no arquivo tsconfig.json;
9. npm i ts-node-dev -D
10. Criar o atributo "scripts" com o conteúdo "dev":"ts-node-dev src/server.ts" no arquivo package.json;

## Para executar o projeto
11. npm run dev

## Para executar o projeto mais rápido
12. Adicionar "--transpile-only" no scripts dev em package.json (para não verifiar erros no código);
13. Adicionar "--ignore-watch" node_modules no scripts dev em package.json (para não verificar o node_modules por alterações no código);
14. Adicionar app.use(express.json()); no arquivo server.ts para que a aplicação consiga tratar requisições com body em json;

## Módulo de banco de dados
15. npm i typeorm sqlite3 (cria o banco de dados como um arquivo físico no projeto e faz a integração entre o sqlite e o node)
16. Para usar o typeorm com sqlite, criar a pasta database dentro da pasta src com os arquivos connection.ts e database.sqlite, além do arquivo ormconfig.json na raiz do projeto;
17. npm run typeorm migration:create -n criar_pessoas
18. Editar o arquivo criado em migrations para criar as tabelas e colunas;
19. npm run typeorm migration:run para executar as migrations e criar as estruturas no arquivo de banco de dados.
20. Criar a pasta models dentro da pasta src para criar os modelos que irão representar as tabelas no projeto integrando com typeorm.
21. Descomentar o código strictPropertyInitialization no arquivo tsconfig.json e colocar seu valor como false, para remover a sinalização da necessidade de inicializar os atributos do modelo;
22. Habilitar a API dos decorators no arquivo tsconfig.json: experimentalDecorators": true, "emitDecoratorMetadata": true, 

## Organização das rotas
23. Criar o arquivo Routes.ts para centralizar as rotas do projeto
24. Criar a pasta controllers dentro da pasta src para centralizar as regras das rotas;

## Trabalhando com views
25. Criar a pasta views dentro da pasta src;

## Lidando com exceções
26. npm i express-async-errors
27. Criar uma pasta errors dentro da pasta src, e dentro dela criar um arquivo handler.ts;


## Permitir que a API seja acessível pelos front-ends ou back-ends a partir de outros domínios (incluindo outras portas)
29. npm i cors @types/cors -D
