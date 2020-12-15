import { Router } from 'express';

import PessoaController from './controllers/PessoaController';

const routes = Router();

routes.post('/pessoas', PessoaController.create);
routes.get('/pessoas', PessoaController.index);
routes.get('/pessoas/:id', PessoaController.show);

export default routes;