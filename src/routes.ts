import { Application, Router } from 'express';

//import { PessoaController } from './controllers/PessoaController';
import PessoaController from './controllers/PessoaController';
// import { IndexController } from './controllers/IndexController';
import IndexController from './controllers/IndexController';
// import { PingController } from './controllers/PingController';
import PingController from './controllers/PingController';

export const enum ApiRouteEnum{
  Pessoa = '/pessoas',
  Ping = '/ping',
  Index = '/'
}

const routes = Router();

routes.post(ApiRouteEnum.Pessoa, PessoaController.create);
routes.get(ApiRouteEnum.Pessoa, PessoaController.index);
routes.get(ApiRouteEnum.Pessoa+'/:id', PessoaController.show);
routes.get(ApiRouteEnum.Ping, PingController.show);
routes.get(ApiRouteEnum.Index, IndexController.show);

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