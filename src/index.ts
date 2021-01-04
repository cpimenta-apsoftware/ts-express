//Refatoração do server.ts necessária para execução do Supertest
import './database/connection';
import {app} from "./server";

const port = 3333;

app.listen(port, () => console.log(`O servidor está em execução na porta ${port}!`));
