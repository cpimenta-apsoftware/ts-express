import { ApiRouteEnum } from 'routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import { app } from '../server';

describe('Teste PessoaController', () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    //pode ser utilizado para limpar ou fechar conexões
  });

  it('Requisição /pessoas deve retornar o status 200!', async () => {
    const loResultado = await request(app).get(ApiRouteEnum.Pessoa);

    expect(loResultado.status).toBe(200);
    // expect(loResultado.body.data).toBe('Registros de pessoas');
  });

  it('Requisição /pessoas/:id deve retornar o status 200!', async () => {
    const loResultado = await request(app).get(ApiRouteEnum.Pessoa + '/1');

    expect(loResultado.status).toBe(200);
    // expect(loResultado.body.data).toBe('Registro de uma pessoa');
  });

  it('Requisição de criação de uma pessoa deve retornar o status 201!', async () => {
    //Se a API tiver controle de autenticação de usuário
    // const loUsuario = await request(app).post(ApiRouteEnum.AuthLogin).send({
    //   email: "usuario@email.com",
    //   senha: "senha"
    // });
    // expect(loUsuario.status).toBe(200);

    const loResultado = await request(app).post(ApiRouteEnum.Pessoa)    
      // .set({ token: loUsuario.body.token })
      .send({
        nome: "Caique Pimenta",
        email: "cpimenta.apsoftware@gmail.com",
        instagram: "https://www.instagram.com/cpimenta.apsoftware",
        facebook: "https://www.facebook.com/caique.pimenta.733",
        linkedin: "https://www.linkedin.com/in/caique-pimenta-350117117"
      });

    expect(loResultado.status).toBe(201);
    // expect(loResultado.body.data).toBe('loResultadoado da criação de uma pessoa');
  });
});
