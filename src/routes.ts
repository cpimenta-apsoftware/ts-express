import { Application, Router } from 'express';

//import { PessoaController } from './controllers/PessoaController';
import PessoaController from './controllers/PessoaController';

import { IndexController } from './controllers/IndexController';
// import { PingController } from './controllers/PingController';
import PingController from './controllers/PingController';

const routes = Router();

routes.post('/pessoas', PessoaController.create);
routes.get('/pessoas', PessoaController.index);
routes.get('/pessoas/:id', PessoaController.show);
routes.get('/ping', PingController.show);

export default routes;

// const _routes: [string, Router][] = [
//   ['/', IndexController],
//   ['/ping', PingController],
//   ['/pessoas', PessoaController],
// ];

// export const routes = (app: Application) => {
//   _routes.forEach((route) => {
//     const [url, controller] = route;
//     app.use(url, controller);
//   });
// };