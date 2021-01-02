import request from 'supertest';
import { app } from '../server';

describe('Teste PessoaController', () => {
  it('Requisição /pessoas deve retornar o status 200!', async () => {
    const result = await request(app).get('/pessoas').send();

    expect(result.status).toBe(200);
    //expect(result.body.data).toBe('Registros de pessoas');
  });
});
