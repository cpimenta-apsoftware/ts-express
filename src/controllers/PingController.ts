import { NextFunction, Request, Response, Router } from 'express';

// export const PingController: Router = Router();

// PingController.get('/', async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         res.status(200).send({ data: 'Pong!' });
//     } catch (e) {
//         next(e);
//     }
// });

export default {
    async show(requisicao: Request, resposta: Response) {
        return resposta.status(200).json({ data: 'Pong!' });
    },
};