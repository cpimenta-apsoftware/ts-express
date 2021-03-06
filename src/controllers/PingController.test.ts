import request from 'supertest';
import { app } from '../server';

describe('Teste PingController', () => {
  it('Requisção /ping deve retornar Pong!', async () => {
    const result = await request(app).get('/ping').send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe('Pong!');
  });
});
